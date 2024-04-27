import {StyleSheet} from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    holdingListContainer: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: '#FFF',
    },
    nameLtpContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
      marginBottom: 8,
    },
    ltpContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    pnlQuantityContainer: {
      flexDirection: 'row',
      marginTop: 5,
    },
    symbolText: {
      fontSize: 15,
      fontWeight: 'bold',
    },
  });
};

export default useStyles;
