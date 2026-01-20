import React, { useEffect } from "react";

const DateTime = () => {
    const [dateTime, setDateTime] = React.useState("");
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const dateTimeString = now
        .toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
        .toLowerCase();

      setDateTime(dateTimeString.replace(",", " -"));
    };
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 10000);
  }, []);
  return <div>{dateTime}</div>;
};

export default DateTime;
