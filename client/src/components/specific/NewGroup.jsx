import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  Typography,
  TextField,
} from "@mui/material";

import { sampleUser } from "../constant/sampleData";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const groupname = useInputValidation("");
  const [members, setMembers] = useState(sampleUser);
  const [selectedmembers, setSelectedMembers] = useState([]);
  const selectMemberHandler = (id) => {
    if (selectedmembers.includes(id)) {
      setSelectedMembers((perv) =>
        perv.filter((currentElement) => {
          return currentElement !== id;
        })
      );
    } else {
      setSelectedMembers((perv) => [...perv, id]);
    }
  };

  const cancelHndler = () => {};
  return (
    <Dialog open onClose={cancelHndler}>
      <Stack
        direction={"column"}
        width={"25rem"}
        maxHeight={"80vh"}
        overflow={"auto"}
        p={{ xs: "1rem", sm: "2rem" }}
      >
        <DialogTitle textAlign={"center"}>New Group</DialogTitle>
        <TextField placeholder="Group Name" />
        <Typography variant={"h6"}>Members</Typography>

        <Stack>
          {members.map((i) => {
            return (
              <UserItem
                user={i}
                key={i._id}
                handler={selectMemberHandler}
                isAdded={selectedmembers.includes(i._id)}
              />
            );
          })}
        </Stack>
        <Stack direction={"row"} width={"100%"} justifyContent={"space-evenly"}>
          <Button color="error">Cancel</Button>
          <Button variant="contained">Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
