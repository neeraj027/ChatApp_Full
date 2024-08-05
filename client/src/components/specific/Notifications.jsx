import React, { memo } from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { sampleNotification } from "../constant/sampleData";

const Notifications = () => {
  const friendRequestHandler = (id, accept) => {
    console.log(id);
  };
  return (
    <Dialog open>
      <Stack
        direction={"column"}
        width={"25rem"}
        maxHeight={"80vh"}
        overflow={"auto"}
        p={{ xs: "1rem", sm: "2rem" }}
      >
        <DialogTitle textAlign={"center"}>Friend Requests</DialogTitle>
        {sampleNotification.length > 0 ? (
          sampleNotification.map(({ sender, _id }) => {
            return (
              <NotificationItem
                sender={sender}
                _id={_id}
                handler={friendRequestHandler}
                key={_id}
              />
            );
          })
        ) : (
          <Typography textAlign={"center"}>No Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;

  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar src={avatar} />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {`${name}`}
        </Typography>
        <Stack direction={"column"}>
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default Notifications;
