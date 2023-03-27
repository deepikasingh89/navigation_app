import React from "react";
import Button from "../Components/Button";
import { GoBell, GoAlert, GoLink, GoInbox, GoInfo } from "react-icons/go";

export default function ButtonPage() {
  const handleClick = () => {
  };
  return (
    <div className="columns-3xs">
      <Button primary onClick={handleClick} onMouseOver={handleClick}>
        Click!! <GoBell />
      </Button>
      <Button success rounded>
        Click1!! <GoAlert />
      </Button>
      <Button danger>
        Click2!! <GoLink />
      </Button>
      <Button secondary>
        Click3!! <GoInbox />
      </Button>
      <Button warning rounded>
        Click4!! <GoInfo />
      </Button>
    </div>
  );
}
