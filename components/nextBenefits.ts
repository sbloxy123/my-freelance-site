export interface Ingredient {
  icon: string;
  label: string;
}

export const allIngredients = [
  {
    icon: "",
    label: "1. Faster Loading and Better Search Results",
    text: "Next.js makes your website load faster because it prepares some parts of it in advance, making it quicker for people to see and use. This is essential because people don't like waiting for slow websites. Also, it helps search engines understand your website better, so when someone searches for something related to your website, it's more likely to appear in the search results.",
  },
  {
    icon: "",
    label: "2. Smooth Development Process",
    text: "Next.js allows us to create beautiful and consistent designs for your website. It ensures that the colors, styles, and layouts stay the same across all pages, making your website look professional and appealing.",
  },
  {
    icon: "",
    label: "3. Attractive and Consistent Design",
    text: "Unlike most traditional LAMP stack websites, the need for servers to perform logic and work whilst your visitors wait for the page to load is removed... which also ultimately removes the ways the website can be attacked by malicious code from hackers.",
  },
  {
    icon: "",
    label: "4. Organization of the Website's Code",
    text: "Next.js helps us keep the different parts of your website organized, which makes it easier to find and fix any problems that might come up during development.",
  },
  {
    icon: "",
    label: "5. Top-Notch Security and Stability",
    text: "Next.js is designed to be safe and secure, protecting your website from potential threats and keeping it stable so that people can access it whenever they want.",
  },
  {
    icon: "",
    label: "6. Easy Updates and Improvements",
    text: "With Next.js, it's straightforward to add new features and make improvements to your website in the future. This means we can keep your website up-to-date and relevant for a long time.",
  },
  {
    icon: "",
    label: "7. Compatibility with Various Platforms",
    text: "Whether you want your website to run on traditional web servers, fancy serverless setups, or simple static hosting services, Next.js can make it work on different platforms.",
  },
];

const [
  Loading,
  Development,
  Attractive,
  Organization,
  Security,
  Updates,
  Compatibility,
] = allIngredients;
export const initialTabs = [
  Loading,
  Development,
  Attractive,
  Organization,
  Security,
  Updates,
  Compatibility,
];

export function getNextIngredient(
  ingredients: Ingredient[]
): Ingredient | undefined {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
