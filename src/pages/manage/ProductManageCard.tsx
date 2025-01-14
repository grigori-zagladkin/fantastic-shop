import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC } from "react";

const ProductManageCard: FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Список товаров</CardTitle>
        <CardDescription>
          <Button variant="outline">+ Добавить</Button>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Список товаров</p>
      </CardContent>
    </Card>
  );
};

export default ProductManageCard;
