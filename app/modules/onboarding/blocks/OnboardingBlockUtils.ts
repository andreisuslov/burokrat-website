import { Colors } from "~/application/enums/shared/Colors";
import { GridBlockDto } from "~/modules/pageBlocks/components/blocks/shared/grid/GridBlockUtils";

export type OnboardingBlockDto = {
  style: OnboardingBlockStyle;
  title: string;
  canBeDismissed: boolean;
  height: OnboardingHeightDto;
  steps: OnboardingStepBlockDto[];
};

export type OnboardingHeightDto = "xs" | "sm" | "md" | "lg" | "xl" | "auto";

export interface OnboardingStepBlockDto {
  id?: string;
  title: string;
  description?: string;
  links: OnboardingLinkDto[];
  gallery: OnboardingGalleryDto[];
  input: OnboardingInputDto[];
  inputGrid?: GridBlockDto;
  icon?: string;
  completedAt?: Date | null;
}

interface OnboardingLinkDto {
  text: string;
  href: string;
  isPrimary: boolean;
  target?: string;
}

interface OnboardingGalleryDto {
  type: "image" | "video";
  title: string;
  src: string;
}

export interface OnboardingInputOptionDto {
  name: string;
  value: string;
  color?: Colors;
}

interface OnboardingInputDto {
  type: "text" | "select";
  name: string;
  title: string;
  isRequired: boolean;
  options: OnboardingInputOptionDto[];
}

export const OnboardingBlockStyles = [{ value: "modal", name: "Modal" }] as const;
export type OnboardingBlockStyle = (typeof OnboardingBlockStyles)[number]["value"];

export const defaultOnboardingStepBlock: OnboardingStepBlockDto = {
  title: "Welcome",
  description: "This is just a sample text to show you how it works.",
  icon: `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32"> <path d="M 19 6 L 19 7.4375 L 19.09375 7.625 L 20.125 10 L 11.4375 10 L 11.125 10.4375 L 8.40625 14.28125 C 7.800781 14.09375 7.164063 14 6.5 14 C 2.917969 14 0 16.914063 0 20.5 C 0 24.085938 2.914063 27 6.5 27 C 9.914063 27 12.707031 24.347656 12.96875 21 L 16.40625 21 L 16.71875 20.5625 L 21.59375 13.375 L 22.25 14.875 C 20.308594 16.003906 19 18.109375 19 20.5 C 19 24.070313 21.929688 27 25.5 27 C 29.070313 27 32 24.070313 32 20.5 C 32 16.929688 29.070313 14 25.5 14 C 25.019531 14 24.546875 14.054688 24.09375 14.15625 L 21.40625 8 L 24.5 8 C 24.785156 8 25 8.214844 25 8.5 C 25 8.785156 24.785156 9 24.5 9 L 24.5 11 C 25.867188 11 27 9.867188 27 8.5 C 27 7.132813 25.867188 6 24.5 6 Z M 8 7 L 8 9 L 14 9 L 13 7 Z M 13.46875 12 L 20.125 12 L 16.09375 17.9375 Z M 11.71875 13 L 14.34375 19 L 6 19 L 6 21 L 10.9375 21 C 10.683594 23.242188 8.808594 25 6.5 25 C 4.019531 25 2 22.980469 2 20.5 C 2 18.019531 4.019531 16 6.5 16 C 8.058594 16 9.441406 16.796875 10.25 18 L 12.5 18 C 12.019531 16.847656 11.230469 15.859375 10.21875 15.15625 Z M 25.5 16 C 27.980469 16 30 18.019531 30 20.5 C 30 22.980469 27.980469 25 25.5 25 C 23.019531 25 21 22.980469 21 20.5 C 21 18.925781 21.832031 17.554688 23.0625 16.75 L 25.09375 21.40625 L 26.90625 20.59375 L 24.9375 16.0625 C 25.125 16.039063 25.308594 16 25.5 16 Z"></path> </svg>`,
  links: [
    {
      text: "Primary link",
      href: "#",
      isPrimary: true,
    },
    {
      text: "Secondary link",
      href: "#",
      isPrimary: false,
    },
  ],
  gallery: [
    {
      type: "image",
      title: "Image 1",
      src: "https://via.placeholder.com/1000x600?text=Image%201",
    },
    {
      type: "image",
      title: "Image 2",
      src: "https://via.placeholder.com/1000x600?text=Image%202",
    },
  ],
  input: [
    {
      type: "text",
      name: "source",
      title: "Where did you hear about us?",
      isRequired: true,
      options: [],
    },
    {
      type: "select",
      name: "What will you use it for?",
      title: "Select",
      isRequired: false,
      options: [
        { value: "research", name: "Research", color: Colors.GRAY },
        { value: "personal", name: "Personal", color: Colors.BLUE },
        { value: "smallBusiness", name: "Small Business", color: Colors.INDIGO },
        { value: "largeCompany", name: "Large company", color: Colors.VIOLET },
      ],
    },
  ],
};

export const defaultOnboardingBlock: OnboardingBlockDto = {
  style: "modal",
  title: "Onboarding title",
  canBeDismissed: true,
  height: "md",
  steps: [defaultOnboardingStepBlock],
};