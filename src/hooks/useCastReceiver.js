import { useEffect, useState } from 'react';

import { loadScript } from '../utils/loadScript';

const useCastReceiver = () => {
  const [castContext, setCastContext] = useState();
  const [isCastFrameworkLoaded, setIsCastFrameworkLoaded] = useState(false);

  const startCastReceiver = () => {
    const context = window.cast.framework.CastReceiverContext.getInstance();
    /* const CUSTOM_CHANNEL = 'urn:x-cast:com.example.cast.media';
    context.addCustomMessageListener(CUSTOM_CHANNEL, function (customEvent) {
      // handle customEvent.
      setSession({ ...session, sessionId: customEvent });
    }); */
    const options = new window.cast.framework.CastReceiverOptions();
    options.disableIdleTimeout = true;
    options.customNamespaces = {
      [process.env.REACT_APP_CAST_NAMESPACE]: 'JSON',
    };
    context.start(options);
    setCastContext(context);
    console.log('ChromeCast Receiver ready');
    setIsCastFrameworkLoaded(true);
  };

  const loadCastFramework = async () => {
    if (!isCastFrameworkLoaded) {
      return await loadScript(
        '//www.gstatic.com/cast/sdk/libs/caf_receiver/v3/cast_receiver_framework.js',
        false,
        () => startCastReceiver()
      );
    }
    return;
  };

  useEffect(async () => {
    await loadCastFramework();
  }, []);

  return {
    castContext,
  };
};

export default useCastReceiver;
