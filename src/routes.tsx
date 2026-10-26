import type { RouteObject } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import RankingCandidates from "@/pages/RankingCandidates";
import SellerLeads from "@/pages/SellerLeads";
import SellerLeadsPricing from "@/pages/SellerLeadsPricing";
import Systems from "@/pages/Systems";

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/systems-in-practice", element: <Systems /> },
      { path: "/systems-in-practice/seller-leads", element: <SellerLeads /> },
      {
        path: "/systems-in-practice/seller-leads-pricing",
        element: <SellerLeadsPricing />,
      },
      {
        path: "/systems-in-practice/ranking-candidates",
        element: <RankingCandidates />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
];
