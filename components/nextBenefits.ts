export interface Ingredient {
  icon: string;
  label: string;
}

export const allIngredients = [
  {
    icon: "",
    label: "1. Faster Loading and Better Search Results",
    text: "Your website load faster because it prepares some parts of it in advance, making it quicker for people to see and use. This is essential because people don't like waiting for slow websites. Also, it helps search engines understand your website better, so when someone searches for something related to your website, it's more likely to appear in the search results",
  },
  {
    icon: "",
    label: "2. Smooth Development Process",
    text: "Next.js helps developers like me write code more easily and see the changes we make instantly without causing disruptions. This means we can build your website faster and more efficiently.",
  },
  {
    icon: "",
    label: "3. Attractive and Consistent Design",
    text: "Allows us to create beautiful and consistent designs for your website. It ensures that the colours, styles, and layouts stay the same across all pages, making your website look professional and appealing.",
  },
  {
    icon: "",
    label: "4. Organization of the Website's Code",
    text: "It helps me keep the different parts of your website organized, which makes it easier to find and fix any problems that might come up during and after development.",
  },
  {
    icon: "",
    label: "5. Excellent Security and Stability",
    text: "Next.js is designed to be safe and secure, protecting your website from potential threats and keeping it stable so that people can access it whenever they want.",
  },
  {
    icon: "",
    label: "6. Easy Updates and Improvements",
    text: "It's straightforward to add new features and make improvements to your website in the future. This means we can keep your website up-to-date and relevant for a long time.",
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
