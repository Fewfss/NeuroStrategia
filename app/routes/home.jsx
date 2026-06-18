import HomePage from "../pages/HomePage.jsx";

export function meta() {
  return [
    { title: "NeuroStrategia | TCC" },
    {
      name: "description",
      content:
        "Landing page do projeto NeuroStrategia, com foco em neurodiversidade e inclusão organizacional.",
    },
  ];
}

export default function HomeRoute() {
  return <HomePage />;
}
