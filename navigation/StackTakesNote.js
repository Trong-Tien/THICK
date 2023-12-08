import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ChaoMung from '../screens/ChaoMung';
import DangNhap from '../screens/DangNhap';
import DangKy from '../screens/DangKy';
import Notes from '../screens/Notes';
import ThemNote from '../screens/ThemNote';
import ChinhSuaNote from '../screens/ChinhSuaNote';



const Stack = createNativeStackNavigator();

export default function StackTakeNotes() {
    return (
        <Stack.Navigator
            initialRouteName="ChaoMung" // khoi tao route 
            backBehavior="history"
        >
            <Stack.Screen 
             options={({ navigation, route }) => ({
                    title: 'Chào mừng đến với take notes'
                })}
            name="ChaoMung" 
            component={ChaoMung} 
            />
            <Stack.Screen
                options={({ navigation, route }) => ({
                    title: 'Đăng nhập'
                })}
                name="DangNhap"
                component={DangNhap}
            />
            <Stack.Screen
                options={({ navigation, route }) => ({
                    title: 'Đăng Ký'
                })}
                name="DangKy"
                component={DangKy}
            />
            <Stack.Screen
                options={({ navigation, route }) => ({
                    title: 'Danh sách take notes'
                })}
                name="Notes"
                component={Notes}
            />
            <Stack.Screen
                options={({ navigation, route }) => ({
                    title: 'Chỉnh sửa note'
                })}
                name="ChinhSuaNote"
                component={ChinhSuaNote}
            />
            <Stack.Screen
                options={({ navigation, route }) => ({
                    title: 'Thêm note mới'
                })}
                name="ThemNote"
                component={ThemNote}
            />
        </Stack.Navigator>
    );
}
