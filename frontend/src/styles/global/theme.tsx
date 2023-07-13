import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          fontFamily: 'inherit',
          fontSize: '1.6rem',
          color: '#000 ',
          transform: 'translate(1.6rem, 1.6rem) scale(1)',
          '&.Mui-focused, &[data-shrink="true"]': {
            color: '#000',
            transform: 'translate(1.6rem, 0.6rem) scale(0.75)',
          },
          '&.MuiInputLabel-outlined': {
            transform: 'translate(1.6rem, 1.2rem) scale(1)',
            '&.Mui-focused, &[data-shrink="true"]': {
              transform: 'translate(1.6rem, -0.9rem) scale(0.75)',
            },
          },
          '&.Mui-error': {
            color: '#000',
          },
          '&.Mui-disabled': {
            color: '#C9D9CD',
          },
          [theme.breakpoints.down('lg')]: {
            fontSize: '1.4rem',
          },
        }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
          fontSize: '1.2rem',
          letterSpacing: '0',
          marginTop: '0.2rem',
          position: 'absolute',
          top: '100%',
          left: '0',
          '&.Mui-error': {
            color: 'red',
          },
          '&.Mui-disabled': {
            color: '#C9D9CD',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          fontFamily: 'inherit',
          fontSize: '1.6rem',
          color: '#000',
          padding: '0 1.6rem',
          borderRadius: 0,
          [theme.breakpoints.down('lg')]: {
            fontSize: '1.4rem',
          },
        }),
        input: {},
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&::before': {
            borderWidth: '1px !important',
            borderColor: '#C9D9CD',
          },
          '&::after': {
            display: 'none',
          },
          '&:hover': {
            '&::before': {
              borderBottomColor: `'#C9D9CD !important`,
            },
          },
          '&.Mui-focused': {
            '&::before': {
              borderBottomColor: `#C9D9CD !important`,
            },
          },
          '&.Mui-error': {
            '&::before': {
              borderBottomColor: `#C9D9CD  !important`,
            },
          },
          '&.Mui-disabled': {
            '&::before': {
              borderBottomColor: `#C9D9CD !important`,
            },
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          '&::before, &::after': {
            display: 'none',
          },
          borderRadius: 0,
          backgroundColor: '#C9D9CD ',
          '&:hover': {
            backgroundColor: '#C9D9CD ',
          },
          '&.Mui-focused': {
            backgroundColor: '#C9D9CD ',
          },
          '&.Mui-error': {
            backgroundColor: '#C9D9CD ',
          },
          '&.Mui-disabled': {
            backgroundColor: '#C9D9CD',
          },
        },
        input: {
          padding: '0.8rem 0 0',
          height: '4.8rem',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          borderColor: '#C9D9CD',
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: '#CCEC67',
            },
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#CCEC67',
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: '#CCEC67',
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: '#CCEC67',
          },
        },
        notchedOutline: {
          padding: '0 1.1rem',
          borderRadius: 0,
          borderWidth: '1px !important',
          borderColor: '#C9D9CD',
          transition: 'all 0.3s ease 0s',
        },
        input: {
          padding: '0',
          height: '4.8rem',
        },
      },
    },
  },
});

export default theme;
