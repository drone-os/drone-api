(function() {var implementors = {};
implementors["drone_core"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"drone_core/fib/struct.FiberFuture.html\" title=\"struct drone_core::fib::FiberFuture\">FiberFuture</a>&lt;T&gt;",synthetic:false,types:["drone_core::fib::future::FiberFuture"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"drone_core/sync/spsc/oneshot/struct.Receiver.html\" title=\"struct drone_core::sync::spsc::oneshot::Receiver\">Receiver</a>&lt;T&gt;",synthetic:false,types:["drone_core::sync::spsc::oneshot::receiver::Receiver"]},];
implementors["drone_cortex_m"] = [{text:"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"drone_cortex_m/drv/timer/trait.TimerStop.html\" title=\"trait drone_cortex_m::drv::timer::TimerStop\">TimerStop</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a> for <a class=\"struct\" href=\"drone_cortex_m/drv/timer/struct.TimerSleep.html\" title=\"struct drone_cortex_m::drv::timer::TimerSleep\">TimerSleep</a>&lt;'a, T&gt;",synthetic:false,types:["drone_cortex_m::drv::timer::TimerSleep"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()