import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Parser } from "json2csv";
import Constants from "~/application/Constants";
import { createMetrics } from "~/modules/metrics/services/.server/MetricTracker";
import { RowsApi } from "~/utils/api/.server/RowsApi";
import UrlUtils from "~/utils/app/UrlUtils";
import ApiHelper from "~/utils/helpers/ApiHelper";
import { getEntityPermission } from "~/utils/helpers/PermissionsHelper";
import { verifyUserHasPermission } from "~/utils/helpers/.server/PermissionsService";
import RowsRequestUtils from "../utils/RowsRequestUtils";

export namespace Rows_Export {
  export const loader = async ({ request, params }: LoaderFunctionArgs) => {
    const { time, getServerTimingHeader } = await createMetrics({ request, params }, `[Rows_Export] ${params.entity}`);
    const { t, userId, tenantId, entity } = await RowsRequestUtils.getLoader({ request, params });
    await time(verifyUserHasPermission(request, getEntityPermission(entity, "view"), tenantId), "verifyUserHasPermission");
    if (!entity.isAutogenerated || entity.type === "system") {
      throw redirect(tenantId ? UrlUtils.currentTenantUrl(params, "404") : "/404");
    }
    const rowsData = await time(
      RowsApi.getAll({
        entity,
        tenantId,
        userId,
        urlSearchParams: new URL(request.url).searchParams,
        pageSize: Constants.MAX_EXPORT_PAGE_SIZE,
        time,
      }),
      "RowsApi.getAll"
    );
    const apiFormat = rowsData.items.map((item) => {
      return ApiHelper.getApiFormat(entity, item);
    });
    const parser = new Parser({ fields: entity.properties.map((f) => f.name), delimiter: "|" });
    const csv = parser.parse(apiFormat);
    return new Response(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename=${t(entity.titlePlural)}.csv`,
        ...getServerTimingHeader(),
      },
    });
  };
}
