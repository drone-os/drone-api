(function() {var implementors = {};
implementors["drone_core"] = [];
implementors["drone_cortexm"] = [{"text":"impl&lt;Sv, I, Y, R, F&gt; <a class=\"trait\" href=\"drone_core/fib/trait.Fiber.html\" title=\"trait drone_core::fib::Fiber\">Fiber</a> for <a class=\"struct\" href=\"drone_cortexm/fib/struct.FiberProc.html\" title=\"struct drone_cortexm::fib::FiberProc\">FiberProc</a>&lt;Sv, I, Y, R, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Sv: <a class=\"trait\" href=\"drone_cortexm/sv/trait.Switch.html\" title=\"trait drone_cortexm::sv::Switch\">Switch</a>&lt;Data&lt;I, <a class=\"enum\" href=\"drone_core/fib/enum.FiberState.html\" title=\"enum drone_core::fib::FiberState\">FiberState</a>&lt;Y, R&gt;&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(I, <a class=\"struct\" href=\"drone_cortexm/fib/struct.Yielder.html\" title=\"struct drone_cortexm::fib::Yielder\">Yielder</a>&lt;Sv, I, Y, R&gt;) -&gt; R,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Y: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>","synthetic":false,"types":["drone_cortexm::fib::proc::fiber::FiberProc"]},{"text":"impl&lt;Sv, T&gt; <a class=\"trait\" href=\"drone_core/fib/trait.Fiber.html\" title=\"trait drone_core::fib::Fiber\">Fiber</a> for <a class=\"struct\" href=\"drone_cortexm/proc_loop/struct.Fiber.html\" title=\"struct drone_cortexm::proc_loop::Fiber\">Fiber</a>&lt;Sv, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Sv: <a class=\"trait\" href=\"drone_cortexm/sv/trait.SvCall.html\" title=\"trait drone_cortexm::sv::SvCall\">SvCall</a>&lt;<a class=\"struct\" href=\"drone_cortexm/sv/struct.SwitchBackService.html\" title=\"struct drone_cortexm::sv::SwitchBackService\">SwitchBackService</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Sv: <a class=\"trait\" href=\"drone_cortexm/sv/trait.SvCall.html\" title=\"trait drone_cortexm::sv::SvCall\">SvCall</a>&lt;<a class=\"struct\" href=\"drone_cortexm/sv/struct.SwitchContextService.html\" title=\"struct drone_cortexm::sv::SwitchContextService\">SwitchContextService</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"drone_core/proc_loop/trait.ProcLoop.html\" title=\"trait drone_core::proc_loop::ProcLoop\">ProcLoop</a>&lt;Context = <a class=\"struct\" href=\"drone_cortexm/proc_loop/struct.Yielder.html\" title=\"struct drone_cortexm::proc_loop::Yielder\">Yielder</a>&lt;Sv, T&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["drone_cortexm::proc_loop::Fiber"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()