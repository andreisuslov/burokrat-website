import { json, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import ViewBoardsEmptyIcon from "~/components/ui/icons/ViewBoardsEmptyIcon";
import ViewBoardsIcon from "~/components/ui/icons/ViewBoardsIcon";
import ActivityHistoryIcon from "~/components/ui/icons/entities/ActivityHistoryIcon";
import ActivityHistoryIconFilled from "~/components/ui/icons/entities/ActivityHistoryIconFilled";
import CodingIcon from "~/components/ui/icons/entities/CodingIcon";
import CodingIconFilled from "~/components/ui/icons/entities/CodingIconFilled";
import FolderIcon from "~/components/ui/icons/entities/FolderIcon";
import FolderIconFilled from "~/components/ui/icons/entities/FolderIconFilled";
import ModulesIcon from "~/components/ui/icons/entities/ModulesIcon";
import ModulesIconFilled from "~/components/ui/icons/entities/ModulesIconFilled";
import RestApiIcon from "~/components/ui/icons/entities/RestApiIcon";
import RestApiIconFilled from "~/components/ui/icons/entities/RestApiIconFilled";
import RowsIcon from "~/components/ui/icons/entities/RowsIcon";
import RowsIconFilled from "~/components/ui/icons/entities/RowsIconFilled";
import TemplateIcon from "~/components/ui/icons/entities/TemplateIcon";
import TemplateIconFilled from "~/components/ui/icons/entities/TemplateIconFilled";
import ExperimentIcon from "~/components/ui/icons/tests/ExperimentIcon";
import ExperimentIconFilled from "~/components/ui/icons/tests/ExperimentIconFilled";
import SidebarIconsLayout from "~/components/ui/layouts/SidebarIconsLayout";
import { getTranslations } from "~/locale/i18next.server";

type LoaderData = {
  title: string;
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { t } = await getTranslations(request);
  const data: LoaderData = {
    title: `${t("models.entity.plural")} | ${process.env.APP_NAME}`,
  };
  return json(data);
};

export const meta: MetaFunction<typeof loader> = ({ data }) => [{ title: data?.title }];

export default () => {
  return (
    <SidebarIconsLayout
      label={{ align: "right" }}
      items={[
        {
          name: "Entities",
          href: "/admin/entities",
          icon: <ModulesIcon className="h-5 w-5" />,
          iconSelected: <ModulesIconFilled className="h-5 w-5" />,
          exact: true,
        },
        {
          name: "Groups",
          href: "/admin/entities/groups",
          icon: <FolderIcon className="h-5 w-5" />,
          iconSelected: <FolderIconFilled className="h-5 w-5" />,
        },
        {
          name: "Formulas",
          href: "/admin/entities/formulas",
          icon: <ExperimentIcon className="h-5 w-5" />,
          iconSelected: <ExperimentIconFilled className="h-5 w-5" />,
        },
        {
          name: "Rows",
          href: "/admin/entities/rows",
          icon: <RowsIcon className="h-5 w-5" />,
          iconSelected: <RowsIconFilled className="h-5 w-5" />,
        },
        {
          name: "Views",
          href: "/admin/entities/views",
          icon: <ViewBoardsEmptyIcon className="h-5 w-5" />,
          iconSelected: <ViewBoardsIcon className="h-5 w-5" />,
        },
        {
          name: "Logs",
          href: "/admin/entities/logs",
          icon: <ActivityHistoryIcon className="h-5 w-5" />,
          iconSelected: <ActivityHistoryIconFilled className="h-5 w-5" />,
        },
        {
          name: "No-code",
          href: "/admin/entities/no-code",
          icon: <CodingIcon className="h-5 w-5" />,
          iconSelected: <CodingIconFilled className="h-5 w-5" />,
        },
        {
          name: "Yes-code",
          href: "/admin/entities/code-generator",
          icon: <CodingIcon className="h-5 w-5" />,
          iconSelected: <CodingIconFilled className="h-5 w-5" />,
        },
        {
          name: "API",
          href: "/admin/entities/api",
          icon: <RestApiIcon className="h-5 w-5" />,
          iconSelected: <RestApiIconFilled className="h-5 w-5" />,
        },
        {
          name: "Fake Rows",
          href: "/admin/entities/fake-rows",
          icon: (
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 512 512">
              <path d="M 56.570312 7.5390625 A 7.989 7.989 0 0 0 48.570312 15.519531 L 48.490234 47.519531 L 32.490234 47.480469 L 32.470703 47.480469 A 8.006 8.006 0 0 0 24.470703 55.460938 L 24.169922 183.46094 A 8.006 8.006 0 0 0 32.150391 191.48047 L 48.150391 191.51953 L 47.529297 455.51953 A 48 48 0 0 0 95.410156 503.63086 L 431.41016 504.42969 L 431.5293 504.42969 A 48 48 0 0 0 479.5293 456.53906 L 479.91992 288.53906 A 7.957 7.957 0 0 0 477.58984 282.88086 A 7.987 7.987 0 0 0 471.93945 280.51953 L 383.93945 280.31055 L 384.15039 192.31055 L 400.15039 192.34961 L 400.16992 192.34961 A 8.006 8.006 0 0 0 408.16992 184.36914 L 408.4707 56.369141 A 8 8 0 0 0 400.49023 48.349609 L 384.49023 48.310547 L 384.57031 16.310547 A 8.011 8.011 0 0 0 376.58984 8.2890625 L 56.589844 7.5390625 L 56.570312 7.5390625 z M 64.550781 23.560547 L 368.55078 24.279297 L 368.49023 48.279297 L 64.490234 47.560547 L 64.550781 23.560547 z M 40.460938 63.5 L 56.449219 63.539062 L 56.480469 63.539062 L 392.44922 64.330078 L 392.18945 176.33008 L 376.18945 176.28906 L 376.16992 176.28906 L 40.189453 175.5 L 40.460938 63.5 z M 136.37891 87.726562 A 8 8 0 0 0 128.37891 95.707031 L 128.26562 143.70703 A 8 8 0 0 0 136.24609 151.72656 L 136.26562 151.72656 A 8 8 0 0 0 144.26562 143.74414 L 144.30273 127.74414 L 152.30273 127.76367 L 152.32227 127.76367 A 8.0000062 8.0000062 0 0 0 152.3418 111.76367 L 144.3418 111.74414 L 144.36133 103.74414 L 152.35938 103.76367 L 152.37891 103.76367 A 8.0000056 8.0000056 0 0 0 152.39844 87.763672 L 136.39844 87.726562 L 136.37891 87.726562 z M 192.37891 87.857422 A 8 8 0 0 0 184.79688 93.310547 L 168.68359 141.27148 A 8.0002743 8.0002743 0 1 0 183.84961 146.37109 L 184.69727 143.84375 L 199.83203 143.88086 L 200.66992 146.41211 A 8.0001103 8.0001103 0 0 0 215.86133 141.38867 L 199.97461 93.347656 A 8 8 0 0 0 192.39648 87.857422 L 192.37891 87.857422 z M 232.38086 87.949219 A 8 8 0 0 0 224.38086 95.929688 L 224.26953 143.92969 A 7.991 7.991 0 0 0 232.25 151.94922 L 232.26953 151.94922 A 8.006 8.006 0 0 0 240.26953 143.9707 L 240.2793 135.9707 L 249.84961 148.78906 A 8.0030276 8.0030276 0 1 0 262.67969 139.2207 L 243.81055 113.94922 L 260.80078 102.67969 A 8.0015811 8.0015811 0 0 0 251.96094 89.339844 L 240.38086 97.019531 L 240.38086 95.970703 A 8 8 0 0 0 232.40039 87.949219 L 232.38086 87.949219 z M 280.375 88.064453 A 8 8 0 0 0 272.375 96.044922 L 272.26172 144.04492 A 8 8 0 0 0 280.24219 152.06445 L 296.24219 152.10156 L 296.26172 152.10156 A 8.0000051 8.0000051 0 0 0 296.2793 136.10156 L 288.2793 136.08203 L 288.29883 128.08203 L 296.30078 128.09961 L 296.31836 128.09961 A 8.0000056 8.0000056 0 0 0 296.33789 112.09961 L 288.33789 112.08203 L 288.35547 104.08203 L 296.35547 104.10156 L 296.375 104.10156 A 8.0000051 8.0000051 0 0 0 296.39258 88.101562 L 280.39258 88.064453 L 280.375 88.064453 z M 192.31836 121.15234 L 194.53711 127.86133 L 190.06836 127.85352 L 192.31836 121.15234 z M 64.150391 191.56055 L 368.15039 192.26953 L 367.5293 456.26953 A 47.64 47.64 0 0 0 379.67969 488.30078 L 95.449219 487.63086 A 32.008 32.008 0 0 1 63.529297 455.55078 L 64.150391 191.56055 z M 88.074219 215.61133 A 8.0000051 8.0000051 0 0 0 88.056641 231.61133 L 344.05664 232.21875 L 344.07422 232.21875 A 8.0000056 8.0000056 0 0 0 344.09375 216.21875 L 88.09375 215.61133 L 88.074219 215.61133 z M 88.019531 239.61133 A 8.0000056 8.0000056 0 0 0 88.001953 255.61133 L 344.00195 256.21875 L 344.01953 256.21875 A 8.0000051 8.0000051 0 0 0 344.03711 240.21875 L 88.037109 239.61133 L 88.019531 239.61133 z M 87.962891 263.61133 A 8.0000056 8.0000056 0 0 0 87.943359 279.61133 L 343.94336 280.21875 L 343.96289 280.21875 A 8.0000051 8.0000051 0 0 0 343.98047 264.21875 L 87.980469 263.61133 L 87.962891 263.61133 z M 87.904297 287.61133 A 8.0000051 8.0000051 0 0 0 87.886719 303.61133 L 295.88672 304.10352 L 295.9043 304.10352 A 8.0000056 8.0000056 0 0 0 295.92383 288.10352 L 87.923828 287.61133 L 87.904297 287.61133 z M 383.90039 296.31055 L 463.91016 296.5 L 463.5293 456.5 A 32.008 32.008 0 0 1 431.5293 488.42969 L 431.44922 488.42969 L 415.44922 488.39062 A 31.991 31.991 0 0 1 383.5293 456.31055 L 383.90039 296.31055 z M 87.830078 319.61133 A 8 8 0 0 0 79.830078 327.59375 L 79.679688 391.59375 A 8 8 0 0 0 87.660156 399.61133 L 343.66016 400.21875 L 343.67969 400.21875 A 8 8 0 0 0 351.67969 392.23633 L 351.83008 328.23633 A 8 8 0 0 0 343.84766 320.21875 L 87.847656 319.61133 L 87.830078 319.61133 z M 95.814453 335.63086 L 335.81445 336.19922 L 335.69922 384.19922 L 95.699219 383.63086 L 95.814453 335.63086 z M 87.599609 415.61133 A 8.0000056 8.0000056 0 0 0 87.580078 431.61133 L 343.58008 432.21875 L 343.59961 432.21875 A 8.0000051 8.0000051 0 0 0 343.61914 416.21875 L 343.61719 416.21875 L 87.619141 415.61133 L 87.599609 415.61133 z M 87.544922 439.60742 A 8.0000056 8.0000056 0 0 0 87.525391 455.60742 L 295.52539 456.09961 L 295.54492 456.09961 A 8.0000051 8.0000051 0 0 0 295.5625 440.09961 L 87.5625 439.60742 L 87.544922 439.60742 z"></path>
            </svg>
          ),
          iconSelected: (
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 512 512">
              <path d="M 56.570312 7.5390625 A 7.989 7.989 0 0 0 48.570312 15.519531 L 48.490234 47.519531 L 32.490234 47.480469 L 32.470703 47.480469 A 8.006 8.006 0 0 0 24.470703 55.460938 L 24.169922 183.46094 A 8.006 8.006 0 0 0 32.150391 191.48047 L 48.150391 191.51953 L 47.529297 455.51953 A 48 48 0 0 0 95.410156 503.63086 L 431.41016 504.42969 L 431.5293 504.42969 A 48 48 0 0 0 479.5293 456.53906 L 479.91992 288.53906 A 7.957 7.957 0 0 0 477.58984 282.88086 A 7.987 7.987 0 0 0 471.93945 280.51953 L 383.93945 280.31055 L 384.15039 192.31055 L 400.15039 192.34961 L 400.16992 192.34961 A 8.006 8.006 0 0 0 408.16992 184.36914 L 408.4707 56.369141 A 8 8 0 0 0 400.49023 48.349609 L 384.49023 48.310547 L 384.57031 16.310547 A 8.011 8.011 0 0 0 376.58984 8.2890625 L 56.589844 7.5390625 L 56.570312 7.5390625 z M 64.550781 23.560547 L 368.55078 24.279297 L 368.49023 48.279297 L 64.490234 47.560547 L 64.550781 23.560547 z M 40.460938 63.5 L 56.449219 63.539062 L 56.480469 63.539062 L 392.44922 64.330078 L 392.18945 176.33008 L 376.18945 176.28906 L 376.16992 176.28906 L 40.189453 175.5 L 40.460938 63.5 z M 136.37891 87.726562 A 8 8 0 0 0 128.37891 95.707031 L 128.26562 143.70703 A 8 8 0 0 0 136.24609 151.72656 L 136.26562 151.72656 A 8 8 0 0 0 144.26562 143.74414 L 144.30273 127.74414 L 152.30273 127.76367 L 152.32227 127.76367 A 8.0000062 8.0000062 0 0 0 152.3418 111.76367 L 144.3418 111.74414 L 144.36133 103.74414 L 152.35938 103.76367 L 152.37891 103.76367 A 8.0000056 8.0000056 0 0 0 152.39844 87.763672 L 136.39844 87.726562 L 136.37891 87.726562 z M 192.37891 87.857422 A 8 8 0 0 0 184.79688 93.310547 L 168.68359 141.27148 A 8.0002743 8.0002743 0 1 0 183.84961 146.37109 L 184.69727 143.84375 L 199.83203 143.88086 L 200.66992 146.41211 A 8.0001103 8.0001103 0 0 0 215.86133 141.38867 L 199.97461 93.347656 A 8 8 0 0 0 192.39648 87.857422 L 192.37891 87.857422 z M 232.38086 87.949219 A 8 8 0 0 0 224.38086 95.929688 L 224.26953 143.92969 A 7.991 7.991 0 0 0 232.25 151.94922 L 232.26953 151.94922 A 8.006 8.006 0 0 0 240.26953 143.9707 L 240.2793 135.9707 L 249.84961 148.78906 A 8.0030276 8.0030276 0 1 0 262.67969 139.2207 L 243.81055 113.94922 L 260.80078 102.67969 A 8.0015811 8.0015811 0 0 0 251.96094 89.339844 L 240.38086 97.019531 L 240.38086 95.970703 A 8 8 0 0 0 232.40039 87.949219 L 232.38086 87.949219 z M 280.375 88.064453 A 8 8 0 0 0 272.375 96.044922 L 272.26172 144.04492 A 8 8 0 0 0 280.24219 152.06445 L 296.24219 152.10156 L 296.26172 152.10156 A 8.0000051 8.0000051 0 0 0 296.2793 136.10156 L 288.2793 136.08203 L 288.29883 128.08203 L 296.30078 128.09961 L 296.31836 128.09961 A 8.0000056 8.0000056 0 0 0 296.33789 112.09961 L 288.33789 112.08203 L 288.35547 104.08203 L 296.35547 104.10156 L 296.375 104.10156 A 8.0000051 8.0000051 0 0 0 296.39258 88.101562 L 280.39258 88.064453 L 280.375 88.064453 z M 192.31836 121.15234 L 194.53711 127.86133 L 190.06836 127.85352 L 192.31836 121.15234 z M 64.150391 191.56055 L 368.15039 192.26953 L 367.5293 456.26953 A 47.64 47.64 0 0 0 379.67969 488.30078 L 95.449219 487.63086 A 32.008 32.008 0 0 1 63.529297 455.55078 L 64.150391 191.56055 z M 88.074219 215.61133 A 8.0000051 8.0000051 0 0 0 88.056641 231.61133 L 344.05664 232.21875 L 344.07422 232.21875 A 8.0000056 8.0000056 0 0 0 344.09375 216.21875 L 88.09375 215.61133 L 88.074219 215.61133 z M 88.019531 239.61133 A 8.0000056 8.0000056 0 0 0 88.001953 255.61133 L 344.00195 256.21875 L 344.01953 256.21875 A 8.0000051 8.0000051 0 0 0 344.03711 240.21875 L 88.037109 239.61133 L 88.019531 239.61133 z M 87.962891 263.61133 A 8.0000056 8.0000056 0 0 0 87.943359 279.61133 L 343.94336 280.21875 L 343.96289 280.21875 A 8.0000051 8.0000051 0 0 0 343.98047 264.21875 L 87.980469 263.61133 L 87.962891 263.61133 z M 87.904297 287.61133 A 8.0000051 8.0000051 0 0 0 87.886719 303.61133 L 295.88672 304.10352 L 295.9043 304.10352 A 8.0000056 8.0000056 0 0 0 295.92383 288.10352 L 87.923828 287.61133 L 87.904297 287.61133 z M 383.90039 296.31055 L 463.91016 296.5 L 463.5293 456.5 A 32.008 32.008 0 0 1 431.5293 488.42969 L 431.44922 488.42969 L 415.44922 488.39062 A 31.991 31.991 0 0 1 383.5293 456.31055 L 383.90039 296.31055 z M 87.830078 319.61133 A 8 8 0 0 0 79.830078 327.59375 L 79.679688 391.59375 A 8 8 0 0 0 87.660156 399.61133 L 343.66016 400.21875 L 343.67969 400.21875 A 8 8 0 0 0 351.67969 392.23633 L 351.83008 328.23633 A 8 8 0 0 0 343.84766 320.21875 L 87.847656 319.61133 L 87.830078 319.61133 z M 95.814453 335.63086 L 335.81445 336.19922 L 335.69922 384.19922 L 95.699219 383.63086 L 95.814453 335.63086 z M 87.599609 415.61133 A 8.0000056 8.0000056 0 0 0 87.580078 431.61133 L 343.58008 432.21875 L 343.59961 432.21875 A 8.0000051 8.0000051 0 0 0 343.61914 416.21875 L 343.61719 416.21875 L 87.619141 415.61133 L 87.599609 415.61133 z M 87.544922 439.60742 A 8.0000056 8.0000056 0 0 0 87.525391 455.60742 L 295.52539 456.09961 L 295.54492 456.09961 A 8.0000051 8.0000051 0 0 0 295.5625 440.09961 L 87.5625 439.60742 L 87.544922 439.60742 z"></path>
            </svg>
          ),
          bottom: true,
        },
        {
          name: "Templates",
          href: "/admin/entities/templates",
          icon: <TemplateIcon className="h-5 w-5" />,
          iconSelected: <TemplateIconFilled className="h-5 w-5" />,
          bottom: true,
        },
        // {
        //   name: "Code",
        //   href: "/admin/entities/code",
        //   icon: <CodeFileIcon className="h-5 w-5" />,
        //   iconSelected: <CodeFileIconFilled className="h-5 w-5" />,
        //   bottom: true,
        // },
      ]}
    >
      <Outlet />
    </SidebarIconsLayout>
  );
};