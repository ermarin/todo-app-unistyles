import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { useUnistyles } from 'react-native-unistyles'

const TabsLayout = () => {
  const { theme } = useUnistyles();
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: theme.colors.tint,
        tabBarActiveTintColor: theme.colors.activeTint,
        sceneStyle: {
          backgroundColor: theme.colors.background
        },
        tabBarStyle: {
          backgroundColor: theme.colors.foreground
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Todos',
          tabBarIcon: ({color, size}) => <Ionicons name='flash-outline' size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Settings',
          tabBarIcon: ({color, size}) => <Ionicons name='settings' size={size} color={color} />
        }}
      />
    </Tabs>
  )
}

export default TabsLayout