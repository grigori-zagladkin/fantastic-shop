import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC } from "react";

const AttributesManageCard: FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Список атрибутов</CardTitle>
        <CardDescription>
          <Button variant="outline">+ Добавить</Button>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Список атрибутов</p>
      </CardContent>
    </Card>
  );
};

export default AttributesManageCard;
