"use client";
import { useMemo } from "react";
import { useTheme } from "next-themes";

export function useThemeCustom () {
    const { theme, setTheme } = useTheme();
    const themesList = useMemo(() => ([
        {
            themeName: "dark",
            background: "#0d0b07",
            darkerBackground: "#3a362f",
            text: "#cdbc9b",
            accent: "#d49d2f",
        },
        {
            themeName: "light",
            background: "#fefeff",
            darkerBackground: "#f5f5f5bf",
            text: "#0454fc",
            accent: "#b4c9c9",
        },
        {
            themeName: "blue",
            background: "#290786",
            darkerBackground: "#331d6e",
            text: "#6a99e5",
            accent: "#b6bcc7",
        },
        {
            themeName: "purple",
            background: "#740b7a",
            darkerBackground: "#8a0a5a",
            text: "#b080b6",
            accent: "#ec246c",
        },
        {
            themeName: "green",
            background: "#066306",
            darkerBackground: "#0d0b07",
            text: "#5e926c",
            accent: "#c9cfd9",
        },
    ]), []);

    return {
        theme,
        setTheme,
        themesList
    };
};
