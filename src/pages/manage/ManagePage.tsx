import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FC } from "react";
import ProductManageCard from "./ProductManageCard";
import CategoriesManageCard from "./CategoriesManageCard";
import AttributesManageCard from "./AttributesManageCard";

const ManagePage: FC = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden px-4 py-3">
      <div className="flex items-center gap-10 mb-6">
        <h1 className="lg:text-4xl text-2xl font-bold">
          Панель администратора
        </h1>
        <Button size="sm" variant="outline">
          На главную
        </Button>
      </div>
      <Tabs defaultValue="products">
        <TabsList className="mb-6">
          <TabsTrigger value="products">Товары</TabsTrigger>
          <TabsTrigger value="categories">Категории</TabsTrigger>
          <TabsTrigger value="attributes">Атрибуты</TabsTrigger>
        </TabsList>
        <TabsContent value="products">
          <ProductManageCard />
        </TabsContent>
        <TabsContent value="categories">
          <CategoriesManageCard />
        </TabsContent>
        <TabsContent value="attributes">
          <AttributesManageCard />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ManagePage;
