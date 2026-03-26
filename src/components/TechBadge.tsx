 import { Wheat } from "lucide-react";



export default function TechBadge() {

  return (

    <div className="flex items-center space-x-2">

      <div className="inline-flex items-center rounded-md border border-wheat-200 bg-yellow-50 px-2.5 py-0.5 text-xs font-semibold text-yellow-700 transition-colors hover:bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800">

        <Wheat className="mr-1 h-3 w-3" />

        Organic Data

      </div>

    </div>

  );

}