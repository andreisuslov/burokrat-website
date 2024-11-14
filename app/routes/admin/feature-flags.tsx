import { json, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import ErrorBanner from "~/components/ui/banners/ErrorBanner";
import IncreaseIcon from "~/components/ui/icons/crm/IncreaseIcon";
import IncreaseIconFilled from "~/components/ui/icons/crm/IncreaseIconFilled";
import SettingsIcon from "~/components/ui/icons/crm/SettingsIcon";
import SettingsIconFilled from "~/components/ui/icons/crm/SettingsIconFilled";
import ToggleOffIcon from "~/components/ui/icons/featureFlags/ToggleOffIcon";
import ToggleOnIcon from "~/components/ui/icons/featureFlags/ToggleOnIcon";
import IndexPageLayout from "~/components/ui/layouts/IndexPageLayout";
import SidebarIconsLayout from "~/components/ui/layouts/SidebarIconsLayout";
import { getTranslations } from "~/locale/i18next.server";

type LoaderData = {
  title: string;
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { t } = await getTranslations(request);
  const data: LoaderData = {
    title: `${t("featureFlags.title")} | ${process.env.APP_NAME}`,
  };
  return json(data);
};

export const meta: MetaFunction<typeof loader> = ({ data }) => [{ title: data?.title }];

export default () => {
  const { t } = useTranslation();
  return (
    <SidebarIconsLayout
      label={{ align: "right" }}
      items={[
        {
          name: "Overview",
          href: "/admin/feature-flags",
          icon: <IncreaseIcon className="h-5 w-5" />,
          iconSelected: <IncreaseIconFilled className="h-5 w-5" />,
          exact: true,
        },
        {
          name: t("featureFlags.plural"),
          href: "/admin/feature-flags/flags",
          icon: <ToggleOffIcon className="h-5 w-5" />,
          iconSelected: <ToggleOnIcon className="h-5 w-5" />,
        },
        {
          name: "Settings",
          href: "/admin/feature-flags/settings",
          icon: <SettingsIcon className="h-5 w-5" />,
          iconSelected: <SettingsIconFilled className="h-5 w-5" />,
          bottom: true,
        },
      ]}
    >
      <IndexPageLayout>
        <ErrorBanner title="Enterprise feature 🚀" text="">
          Dynamic feature flags management is only available in SaasRock Enterprise. But you can see how it works by clicking{" "}
          <a href="/?debugFlag=maintenance" target="_blank" className="underline">
            here
          </a>
          .
        </ErrorBanner>
      </IndexPageLayout>
    </SidebarIconsLayout>
  );
};