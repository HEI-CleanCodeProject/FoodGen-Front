
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "@/app/(pages)/login/page";
import { jest, expect} from "@jest/globals";
import { authProvider } from "@/app/provider/authProvider/clientSide";