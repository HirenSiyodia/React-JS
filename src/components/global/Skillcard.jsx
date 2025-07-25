import React from "react";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardTitle } from "@/components/ui/card";

const Skillcard = ({ imgUrl, title }) => {
  return (
    <Card>
      <CardContent>
        <img
          src={imgUrl}
          width="150"
          height="150"
          alt="image1"
          title={title}
          className="mx-auto rounded-full shadow-lg"
        />
      </CardContent>
      <CardTitle>
        <div className="grid gap-2">
          <h1 className="text-lg font-bold text-center">{title}</h1>
        </div>
      </CardTitle>
    </Card>
  );
};

export default Skillcard;
