import { useTranslation } from "react-i18next";
import { HeadingBlockDto } from "./HeadingBlockUtils";

export default function HeadingVariantCentered({ item }: { item: HeadingBlockDto }) {
  const { t } = useTranslation();
  return (
    <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t(item.headline)}</h1>
      <p className="text-muted-foreground mt-4 text-lg leading-6">{t(item.subheadline)}</p>
    </div>
  );
}