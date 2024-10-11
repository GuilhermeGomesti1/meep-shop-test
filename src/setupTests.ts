import "@testing-library/jest-dom";
import { configure } from "@testing-library/react";
import * as React from "react";

configure({ asyncUtilTimeout: 1000, eventWrapper: (cb) => React.act(cb) });
