import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export default function ForbiddenAlert(): JSX.Element {
  return (
    <div className="xl:w-2/4 md:w-2/4 l:w-2/4">
      <Alert className="bg-red-700 border-red-700 text-4xl text-white font-christmas m-4 p-4">
        <AlertTitle>Zu früh!</AlertTitle>
        <AlertDescription className="text-xl mt-2">
          Noch ist es nicht an der Zeit Türchen des Adventskalenders zu öffnen. Warte bitte auf den richtigen Tag!
        </AlertDescription>
      </Alert>
    </ div>
  );
}
