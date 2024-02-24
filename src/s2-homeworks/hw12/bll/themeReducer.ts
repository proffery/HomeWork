const SET_THEME_ID = 'SET_THEME_ID'
const initState = {
    themeId: 1,
}

type ChangeThemeType = { type: typeof SET_THEME_ID, id: number }

export const themeReducer = (state = initState, action: ChangeThemeType): typeof initState => { // fix any
    switch (action.type) {
        case SET_THEME_ID:
            return { ...state, themeId: action.id }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeType => ({ type: SET_THEME_ID, id }) as const// fix any
