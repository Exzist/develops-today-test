const countries = {
  path: "/",
  component: () => import("@/components/ui/layouts/Layout.vue"),
  children: [
    {
      path: "/",
      name: "home",
      component: () => import("@/components/ui/views/Home.vue"),
    },
    {
      path: "country/:code",
      name: "country",
      component: () => import("@/components/ui/views/Country.vue"),
    },
  ],
};

export default countries;
