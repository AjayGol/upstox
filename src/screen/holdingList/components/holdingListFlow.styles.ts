import {StyleSheet} from 'react-native';
import {constant} from '@utils/constant';

const useStyles = () => {
  return StyleSheet.create({
    mainContainer: {
      backgroundColor: constant.appBackGroundColor,
      flex: 1,
    },
    subContainer: {
      flex: 1,
    },
    holdingListContainer: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: constant.whiteColor,
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
      color: constant.blackColor,
    },
    valueText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: constant.blackColor,
    },
    simpleText: {
      color: constant.blackColor,
    },
    bottomContainer: {
      zIndex: 1,
      bottom: 0,
      left: 0,
      right: 0,
      position: 'absolute',
      backgroundColor: constant.whiteColor,
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
      color: constant.blackColor,
    },
    bottomTextValue: {
      color: constant.blackColor,
      marginVertical: 5,
    },
    bottomListContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    itemSeparatorComponent: {
      backgroundColor: constant.whiteColor,
      height: 2,
    },
    itemSeparatorComponentSub: {
      backgroundColor: constant.separatorLineColor,
      height: 1,
      marginHorizontal: 12,
    },
    headerContainer: {
      height: 50,
      width: '100%',
      backgroundColor: constant.headerColor,
      justifyContent: 'center',
    },
    headerText: {
      color: constant.whiteColor,
      marginHorizontal: 16,
      fontSize: 15,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default useStyles;
