import { useEffect, useState } from 'react';

import { loadScript } from '../utils/loadScript';

const useCastSender = () => {
  const [castContext, setCastContext] = useState();
  const [isCastFrameworkLoaded, setIsCastFrameworkLoaded] = useState(false);

  const loadSenderFramework = () => {
    const context = window.cast.framework.CastContext.getInstance();
    context.setOptions({
      receiverApplicationId: process.env.REACT_APP_RECEIVER_APP_ID,
      autoJoinPolicy: window.chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED,
    });
    setCastContext(context);
    console.log('Cast Sender framework available');
    setIsCastFrameworkLoaded(true);
  };

  const loadFramework = async () => {
    if (!isCastFrameworkLoaded) {
      window['__onGCastApiAvailable'] = function (isAvailable) {
        if (isAvailable) {
          loadSenderFramework();
        }
      };
      return await loadScript(
        '//www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1',
        true
      );
    }
    return;
  };
  useEffect(async () => {
    await loadFramework();
  }, []);
  return {
    castContext,
  };
};
export default useCastSender;
