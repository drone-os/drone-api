(function() {var implementors = {};
implementors["drone_core"] = [{"text":"impl&lt;T&gt; Future for FiberFuture&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Future for Receiver&lt;T&gt;","synthetic":false,"types":[]}];
implementors["drone_cortexm"] = [{"text":"impl&lt;'a, T:&nbsp;TimerStop&gt; Future for TimerSleep&lt;'a, T&gt;","synthetic":false,"types":[]}];
implementors["futures_channel"] = [{"text":"impl&lt;T, '_&gt; Future for Cancellation&lt;'_, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Future for Receiver&lt;T&gt;","synthetic":false,"types":[]}];
implementors["futures_task"] = [{"text":"impl&lt;T, '_&gt; Future for LocalFutureObj&lt;'_, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, '_&gt; Future for FutureObj&lt;'_, T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()