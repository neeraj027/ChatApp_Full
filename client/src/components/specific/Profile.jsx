import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import {
  AlternateEmail as EmailIcon,
  Face as FaceIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";

const Profile = () => {
  return (
    <Stack
      justifyContent={"center"}
      height={"100%"}
      spacing={"2rem"}
      direction={"column"}
      alignItems={"center"}
    >
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "cover",
          marginBottom: "1rem",
          border: "5px white solid",
        }}
      />
      <ProfileCard text="Neeraj" heading="Name" icon={<FaceIcon />} />
      <ProfileCard text="Neerajk027" heading="Username" icon={<EmailIcon />} />
      <ProfileCard text="This is Bio" heading="Bio" />
      <ProfileCard
        text={moment("2024-07-10T00:00:00.000Z").fromNow()}
        heading="Joined"
        icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, icon, heading }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      color={"white"}
      textAlign={"center"}
    >
      {icon && icon}
      <Stack direction={"column"}>
        <Typography variant={"body1"}>{text}</Typography>
        <Typography color={"gray"} variant={"caption"}>
          {heading}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Profile;
