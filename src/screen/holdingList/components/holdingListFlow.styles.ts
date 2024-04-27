import {StyleSheet} from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    mainContainer: {
      backgroundColor: '#C7C7CC',
      flex: 1,
    },
    subContainer: {
      flex: 1,
    },
    holdingListContainer: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: '#FFF',
    },
    nameLtpContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
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
      color: 'black',
    },
    valueText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'black',
    },
    simpleText: {
      color: 'black',
    },
    bottomContainer: {
      zIndex: 1,
      bottom: 0,
      left: 0,
      right: 0,
      position: 'absolute',
      backgroundColor: 'white',
      justifyContent: 'center',
      paddingHorizontal: 16,
      overflow: 'hidden',
    },
    bottomTextContainer: {
      bottom: 20,
      left: 16,
      right: 16,
      position: 'absolute',
      overflow: 'hidden',
    },
    swipeContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    bottomText: {
      fontSize: 15,
      fontWeight: 'bold',
      marginVertical: 5,
      color: 'black',
    },
    bottomTextValue: {
      color: 'black',
      marginVertical: 5,
    },
    bottomListContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    itemSeparatorComponent: {
      backgroundColor: '#FFF',
      height: 2,
    },
    itemSeparatorComponentSub: {
      backgroundColor: '#D7D8D9',
      height: 1,
      marginHorizontal: 12,
    },
  });
};

export default useStyles;
