import { useEffect, useState } from "react";
import type { SkipType } from "../../model/SkipType";
import { getSkips } from "../../http/skip.http";

const SelectSkip = () => {
  const [users, setUsers] = useState<SkipType[]>([]);

  useEffect(() => {
    getSkips().then(({ data }) => setUsers(data));
  }, []);

  return users.map((u) => <p key={u.id}>{u.id} works!</p>);
};

export default SelectSkip;
