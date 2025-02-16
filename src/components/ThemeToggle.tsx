
import React, { useState, useEffect } from 'react';  
import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Switch, rem } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { IconSun, IconMoon } from '@tabler/icons-react';
import classes from "../styles/ThemeToggle.module.css";
import cx from 'clsx';

// Custom hook that returns color scheme based on html element, not system preference like MantineJS
export function useHtmlColorScheme() {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>(
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setColorScheme(
        document.documentElement.classList.contains('dark') ? 'dark' : 'light'
      );
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return colorScheme;
}




export function ThemeToggle() {
  
  const testScheme = useColorScheme();
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const [theme, setTheme] = useState(computedColorScheme);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);


  function toggleTheme() {

    {/* Set MantineJS and TailwindCSS themes */}
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
    setTheme(theme === 'light' ? 'dark' : 'light');

    console.log("Current theme color: " + theme + " and testScheme: " + testScheme);


  }


  // const sunIcon = (
  //   <IconSun
  //     style={{ width: rem(16), height: rem(16) }}
  //     stroke={2.5}
  //     color={theme.colors.yellow[4]}
  //   />
  // );

  // const moonIcon = (
  //   <IconMoonStars
  //     style={{ width: rem(16), height: rem(16) }}
  //     stroke={2.5}
  //     color={theme.colors.blue[6]}
  //   />
  // );




  return (

    // <Switch size="md" color="dark.4" onChange={ToggleDarkMode} onLabel={sunIcon} offLabel={moonIcon} />;

    <ActionIcon
      onClick={toggleTheme}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
      radius="lg"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}
