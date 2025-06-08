import { useEffect, useState } from "react";
import type { SkipType } from "../../model/SkipType";
import { getSkips } from "../../http/skip.http";
import { Box } from "@mui/material";
import MatStepper from "../../components/MatStepper/MatStepper";

const SelectSkip = () => {
  const [users, setUsers] = useState<SkipType[]>([]);

  useEffect(() => {
    getSkips()
      .then(({ data }) => setUsers(data))
      .catch(() => setUsers([]));
  }, []);

  return (
    <Box
      sx={{
        paddingInline: "4rem",
        paddingBlock: "2rem",
      }}>
      <MatStepper />
      {users.map((u) => (
        <p key={u.id}>{u.id} works!</p>
      ))}
    </Box>
  );
};

export default SelectSkip;
