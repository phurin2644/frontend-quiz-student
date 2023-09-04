import { FC, useEffect, useState } from "react";
import { API_URL } from "@/utils/api";
import JsonDataDisplay from "@/components/JsonDataDisplay"; // Adjust the import path

const ServerComponent: FC = () => {
  const [jsonData, setJsonData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setJsonData(data);
      } catch (error) {
        // Handle error appropriately
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {jsonData && <JsonDataDisplay data={jsonData} />}
    </div>
  );
};

export default ServerComponent;
