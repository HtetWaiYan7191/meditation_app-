import { selectAppTheme } from "@/redux/auth/authSlice";
import { useAppSelector } from "@/redux/store";
import { theme } from "@/services/theme";

const useThemeColor = () => {
  const appTheme = useAppSelector(selectAppTheme) as "light" | "dark";
  return theme.colors[appTheme];
};

export default useThemeColor;
