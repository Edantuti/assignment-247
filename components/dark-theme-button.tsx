"use client";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

export function DarkThemeButton() {
  const { setTheme } = useTheme();
  return (
    <div>
      <Switch
        onCheckedChange={(value: boolean) => {
          if (value) {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      />
    </div>
  );
}
