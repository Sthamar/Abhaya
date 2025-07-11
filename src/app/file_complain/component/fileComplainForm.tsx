import { InputCheckbox, InputText, InputTextarea } from "@/components/form";
import { Flex, Stack, Text } from "@mantine/core";

export default function FileComplainForm() {
  return (
    <Stack>
      <Flex justify={"space-between"}>
        <Stack>
          <InputText id={""} type="text" label="Date" />
          <Stack>
            <Text c={"dimmed"}>Gender</Text>
            <InputCheckbox id={""} label="Male" />
            <InputCheckbox id={""} label="Female" />
            <InputCheckbox id={""} label="Other" />
          </Stack>
        </Stack>
        <Stack>
          <InputText id={""} type="text" label="Location" />
          <InputText id={""} type="text" label="Age" />
          <InputText id={""} type="text" label="Subject" />
        </Stack>
        <Stack>
          <InputText id={""} type="text" label="Tags" />
          <InputText id={""} type="text" label="Driver" />
        </Stack>
      </Flex>
      <InputTextarea id={""} label="Complain" />
    </Stack>
  );
}
