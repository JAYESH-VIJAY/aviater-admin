import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
export default function ThemeProvider({ children }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            optionSelectedBg: "#3787ff",
            optionSelectedColor: "white",
            borderRadiusSM: 999,
          },
          Pagination: {
            itemActiveBg: "#E5E8E5",
            colorPrimaryBorder: "transparent",
            colorBorder: "black",
            // colorPrimary: "transparent",
          },
        },
        token: {},
      }}
    >
      <StyleProvider hashPriority="high">{children}</StyleProvider>
    </ConfigProvider>
  );
}
