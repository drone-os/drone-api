(function() {var implementors = {};
implementors["serde_xml_rs"] = [{text:"impl&lt;'w, W&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for &amp;'w mut <a class=\"struct\" href=\"serde_xml_rs/struct.Serializer.html\" title=\"struct serde_xml_rs::Serializer\">Serializer</a>&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,&nbsp;</span>",synthetic:false,types:["serde_xml_rs::serialize::Serializer"]},];
implementors["toml"] = [{text:"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a> for &amp;'b mut <a class=\"struct\" href=\"toml/ser/struct.Serializer.html\" title=\"struct toml::ser::Serializer\">Serializer</a>&lt;'a&gt;",synthetic:false,types:["toml::ser::Serializer"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()