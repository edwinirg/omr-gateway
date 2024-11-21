import { TcpClientOptions } from "@nestjs/microservices";

export interface IConfig {
  port: number;
  staffMicro: TcpClientOptions["options"];
  payrollMicro: TcpClientOptions["options"];
}