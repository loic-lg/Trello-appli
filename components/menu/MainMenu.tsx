import { useState, useRef, Suspense, useEffect } from "react";
import { View, StyleSheet, Animated, SafeAreaView, StatusBar } from "react-native";
import { BoardList } from "./BoardList";
import { LoadingNavigation, MenuNavigation } from "./MenuNavigation";

export function MainMenu({children}: {children: React.ReactNode}) {
    const [collapsed, setCollapsed] = useState(false);
    const menuAnimation = useRef(new Animated.Value(0)).current;

    const toggleMenu = () => {
        const toValue = collapsed ? 1 : 0;
        setCollapsed(!collapsed);

        Animated.spring(menuAnimation, {
            toValue,
            useNativeDriver: false,
            friction: 8,
            tension: 40
        }).start();
    };

    useEffect(() => {
        menuAnimation.setValue(1);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Suspense fallback={<LoadingNavigation/>}>
              <MenuNavigation
                  collapsed={collapsed}
                  onToggleMenu={toggleMenu}
              />
            </Suspense>

            <View style={styles.content}>
                <View style={styles.childrenContainer}>
                    {children}
                </View>

                <Animated.View style={[
                    styles.menuContent,
                    {
                        opacity: menuAnimation,
                        transform: [{
                            translateY: menuAnimation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['-100%', '0%']
                            })
                        }],
                        pointerEvents: collapsed ? 'none' : 'auto',
                        ...StyleSheet.absoluteFillObject
                    }
                ]}>
                    <Suspense>
                        <BoardList/>
                    </Suspense>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
    },
    childrenContainer: {
        flex: 1,
    },
    menuContent: {
        backgroundColor: '#424242',
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});