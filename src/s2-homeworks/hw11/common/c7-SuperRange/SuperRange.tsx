import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={ // стили для слайдера // пишет студент
                {
                    color: '#00CC22',
                    height: 3,
                    padding: '13px 0',
                    width: '147px',
                    '& .MuiSlider-thumb': {
                      height: 18,
                      width: 18,
                      backgroundColor: '#fff',
                      border: '1px solid currentColor',
                      '&:after': {
                        content: '""',
                        position:'absolute',
                        height: '6px',
                        width: '6px',
                        borderRadius: '50% 50%',
                        backgroundColor: '#00CC22',
                      },
                      '&:hover': {
                        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
                      },
                      '& .airbnb-bar': {
                        height: 9,
                        width: 1,
                        backgroundColor: 'currentColor',
                        marginLeft: 1,
                        marginRight: 1,
                      },
                    },
                    '& .MuiSlider-track': {
                      height: 4,
                    },
                    '& .MuiSlider-rail': {
                        color: '#8B8B8B',
                      height: 4,
                    },
                  }
            }
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
