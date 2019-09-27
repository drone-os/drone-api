initSidebarItems({"enum":[["FiberState","The result of a fiber resumption."]],"fn":[["new","Creates a fiber from the generator `gen`."],["new_fn","Creates a fiber from the closure `f`."],["new_once","Creates a fiber from the closure `f`."]],"struct":[["Chain","A lock-free stack of fibers."],["FiberFn","Fiber for [`FnMut`] closure."],["FiberFuture","A future that resolves on completion of the fiber from another thread."],["FiberGen","Fiber for [`Generator`]."],["FiberOnce","Fiber for [`FnOnce`] closure."],["FiberStreamPulse","A stream of pulses from the fiber in another thread."],["FiberStreamRing","A stream of `T` from the fiber in another thread."],["TryFiberStreamPulse","A fallible stream of pulses from the fiber in another thread."],["TryFiberStreamRing","A stream of `Result<T, E>` from the fiber in another thread."]],"trait":[["Fiber","The main task unit of Drone."],["FiberRoot","The root fiber trait."],["ThrFiberClosure","Extends `ThrToken` types with `add_fn` and `add_once` methods."],["ThrFiberFuture","Extends `ThrToken` types with `add_future` method."],["ThrFiberGen","Extends `ThrToken` types with `add` method."],["ThrFiberStreamPulse","Extends `ThrToken` types with `add_stream_pulse` methods."],["ThrFiberStreamRing","Extends `ThrToken` types with `add_stream_ring` methods."]]});