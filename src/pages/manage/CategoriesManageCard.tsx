import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC } from "react";

const CategoriesManageCard: FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Список категорий</CardTitle>
        <CardDescription>
          <Button variant="outline">+ Добавить</Button>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Список категорий</p>
      </CardContent>
    </Card>
  );
};

export default CategoriesManageCard;
