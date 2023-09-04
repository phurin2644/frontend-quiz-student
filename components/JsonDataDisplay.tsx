import { FC } from "react";
import { Paper, Group, Text } from "@mantine/core";
import { Donation } from "@/utils/types";
import dayjs from "dayjs";

interface JsonDataDisplayProps {
  data: Donation;
}

const JsonDataDisplay: FC<JsonDataDisplayProps> = ({ data }) => {
  console.log(data); // Log the data object to the console for debugging

  return (
    <Paper shadow="xs" p="md">
      <Group>
        <Text>{data.firstName}</Text>
        <Text>{data.lastName}</Text>
        <Text>{data.email}</Text>
        <Text>{data.amount}</Text>
        <Text>{dayjs(data.time).format("D-MMM HH:mm:ss")}</Text>
      </Group>
    </Paper>
  );
};

export default JsonDataDisplay;
