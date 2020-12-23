(function() {var implementors = {};
implementors["anyhow"] = [{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for Chain&lt;'a&gt;","synthetic":true,"types":[]}];
implementors["drone_svd"] = [{"text":"impl Send for Access","synthetic":true,"types":[]},{"text":"impl Send for Field","synthetic":true,"types":[]},{"text":"impl Send for Peripheral","synthetic":true,"types":[]},{"text":"impl Send for Register","synthetic":true,"types":[]},{"text":"impl Send for Device","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Config&lt;'a&gt;","synthetic":true,"types":[]}];
implementors["hashbrown"] = [{"text":"impl&lt;T&gt; Send for RawIter&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for RawIterHash&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for DefaultHashBuilder","synthetic":true,"types":[]},{"text":"impl&lt;K, V, S&gt; Send for HashMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for Iter&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Send for IntoIter&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for Keys&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for Values&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for Drain&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, F&gt; Send for DrainFilter&lt;'a, K, V, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for ValuesMut&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, S&gt; Send for RawEntryBuilderMut&lt;'a, K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, S&gt; Send for RawEntryMut&lt;'a, K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, S&gt; Send for RawVacantEntryMut&lt;'a, K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, S&gt; Send for RawEntryBuilder&lt;'a, K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, S&gt; Send for Entry&lt;'a, K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, S&gt; Send for VacantEntry&lt;'a, K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, S&gt; Send for HashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K&gt; Send for Iter&lt;'a, K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K&gt; Send for IntoIter&lt;K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K&gt; Send for Drain&lt;'a, K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, F&gt; Send for DrainFilter&lt;'a, K, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, S&gt; Send for Intersection&lt;'a, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, S&gt; Send for Difference&lt;'a, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, S&gt; Send for SymmetricDifference&lt;'a, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, S&gt; Send for Union&lt;'a, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for TryReserveError","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Bucket&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Send for RawTable&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Send for RawIntoIter&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, '_&gt; Send for RawDrain&lt;'_, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K:&nbsp;Send, V:&nbsp;Send, '_&gt; Send for IterMut&lt;'_, K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V, S, '_&gt; Send for RawOccupiedEntryMut&lt;'_, K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K, V, S, '_&gt; Send for OccupiedEntry&lt;'_, K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["indexmap"] = [{"text":"impl&lt;'a, K, V&gt; Send for OccupiedEntry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for Entry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for VacantEntry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K, V, S&gt; Send for IndexMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for Keys&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for Values&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for ValuesMut&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for Iter&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for IterMut&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Send for IntoIter&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Send for Drain&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, S&gt; Send for IndexSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for IntoIter&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for Iter&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Send for Drain&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, S&gt; Send for Difference&lt;'a, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, S&gt; Send for Intersection&lt;'a, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, S1, S2&gt; Send for SymmetricDifference&lt;'a, T, S1, S2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S1: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, S&gt; Send for Union&lt;'a, T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["log"] = [{"text":"impl Send for Level","synthetic":true,"types":[]},{"text":"impl Send for LevelFilter","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for Record&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for RecordBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Metadata&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for MetadataBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for SetLoggerError","synthetic":true,"types":[]},{"text":"impl Send for ParseLevelError","synthetic":true,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl !Send for IntoIter","synthetic":true,"types":[]},{"text":"impl !Send for TokenStream","synthetic":true,"types":[]},{"text":"impl !Send for LexError","synthetic":true,"types":[]},{"text":"impl !Send for Span","synthetic":true,"types":[]},{"text":"impl !Send for TokenTree","synthetic":true,"types":[]},{"text":"impl !Send for Group","synthetic":true,"types":[]},{"text":"impl Send for Delimiter","synthetic":true,"types":[]},{"text":"impl !Send for Punct","synthetic":true,"types":[]},{"text":"impl Send for Spacing","synthetic":true,"types":[]},{"text":"impl !Send for Ident","synthetic":true,"types":[]},{"text":"impl !Send for Literal","synthetic":true,"types":[]}];
implementors["serde"] = [{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for UnitDeserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for BoolDeserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for I8Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for I16Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for I32Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for I64Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for IsizeDeserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for U8Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for U16Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for U64Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for UsizeDeserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for F32Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for F64Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for CharDeserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for I128Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for U128Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for U32Deserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, E&gt; Send for StrDeserializer&lt;'a, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'de, E&gt; Send for BorrowedStrDeserializer&lt;'de, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for StringDeserializer&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, E&gt; Send for CowStrDeserializer&lt;'a, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'de, E&gt; Send for BorrowedBytesDeserializer&lt;'de, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;I, E&gt; Send for SeqDeserializer&lt;I, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Send for SeqAccessDeserializer&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'de, I, E&gt; Send for MapDeserializer&lt;'de, I, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;I as Iterator&gt;::Item as Pair&gt;::Second: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Send for MapAccessDeserializer&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for IgnoredAny","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Unexpected&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Ok, Error&gt; Send for Impossible&lt;Ok, Error&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Error: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Ok: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["serde_xml_rs"] = [{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Send for Deserializer&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;W&gt; Send for Serializer&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["syn"] = [{"text":"impl !Send for Underscore","synthetic":true,"types":[]},{"text":"impl !Send for Abstract","synthetic":true,"types":[]},{"text":"impl !Send for As","synthetic":true,"types":[]},{"text":"impl !Send for Async","synthetic":true,"types":[]},{"text":"impl !Send for Auto","synthetic":true,"types":[]},{"text":"impl !Send for Await","synthetic":true,"types":[]},{"text":"impl !Send for Become","synthetic":true,"types":[]},{"text":"impl !Send for Box","synthetic":true,"types":[]},{"text":"impl !Send for Break","synthetic":true,"types":[]},{"text":"impl !Send for Const","synthetic":true,"types":[]},{"text":"impl !Send for Continue","synthetic":true,"types":[]},{"text":"impl !Send for Crate","synthetic":true,"types":[]},{"text":"impl !Send for Default","synthetic":true,"types":[]},{"text":"impl !Send for Do","synthetic":true,"types":[]},{"text":"impl !Send for Dyn","synthetic":true,"types":[]},{"text":"impl !Send for Else","synthetic":true,"types":[]},{"text":"impl !Send for Enum","synthetic":true,"types":[]},{"text":"impl !Send for Extern","synthetic":true,"types":[]},{"text":"impl !Send for Final","synthetic":true,"types":[]},{"text":"impl !Send for Fn","synthetic":true,"types":[]},{"text":"impl !Send for For","synthetic":true,"types":[]},{"text":"impl !Send for If","synthetic":true,"types":[]},{"text":"impl !Send for Impl","synthetic":true,"types":[]},{"text":"impl !Send for In","synthetic":true,"types":[]},{"text":"impl !Send for Let","synthetic":true,"types":[]},{"text":"impl !Send for Loop","synthetic":true,"types":[]},{"text":"impl !Send for Macro","synthetic":true,"types":[]},{"text":"impl !Send for Match","synthetic":true,"types":[]},{"text":"impl !Send for Mod","synthetic":true,"types":[]},{"text":"impl !Send for Move","synthetic":true,"types":[]},{"text":"impl !Send for Mut","synthetic":true,"types":[]},{"text":"impl !Send for Override","synthetic":true,"types":[]},{"text":"impl !Send for Priv","synthetic":true,"types":[]},{"text":"impl !Send for Pub","synthetic":true,"types":[]},{"text":"impl !Send for Ref","synthetic":true,"types":[]},{"text":"impl !Send for Return","synthetic":true,"types":[]},{"text":"impl !Send for SelfType","synthetic":true,"types":[]},{"text":"impl !Send for SelfValue","synthetic":true,"types":[]},{"text":"impl !Send for Static","synthetic":true,"types":[]},{"text":"impl !Send for Struct","synthetic":true,"types":[]},{"text":"impl !Send for Super","synthetic":true,"types":[]},{"text":"impl !Send for Trait","synthetic":true,"types":[]},{"text":"impl !Send for Try","synthetic":true,"types":[]},{"text":"impl !Send for Type","synthetic":true,"types":[]},{"text":"impl !Send for Typeof","synthetic":true,"types":[]},{"text":"impl !Send for Union","synthetic":true,"types":[]},{"text":"impl !Send for Unsafe","synthetic":true,"types":[]},{"text":"impl !Send for Unsized","synthetic":true,"types":[]},{"text":"impl !Send for Use","synthetic":true,"types":[]},{"text":"impl !Send for Virtual","synthetic":true,"types":[]},{"text":"impl !Send for Where","synthetic":true,"types":[]},{"text":"impl !Send for While","synthetic":true,"types":[]},{"text":"impl !Send for Yield","synthetic":true,"types":[]},{"text":"impl !Send for Add","synthetic":true,"types":[]},{"text":"impl !Send for AddEq","synthetic":true,"types":[]},{"text":"impl !Send for And","synthetic":true,"types":[]},{"text":"impl !Send for AndAnd","synthetic":true,"types":[]},{"text":"impl !Send for AndEq","synthetic":true,"types":[]},{"text":"impl !Send for At","synthetic":true,"types":[]},{"text":"impl !Send for Bang","synthetic":true,"types":[]},{"text":"impl !Send for Caret","synthetic":true,"types":[]},{"text":"impl !Send for CaretEq","synthetic":true,"types":[]},{"text":"impl !Send for Colon","synthetic":true,"types":[]},{"text":"impl !Send for Colon2","synthetic":true,"types":[]},{"text":"impl !Send for Comma","synthetic":true,"types":[]},{"text":"impl !Send for Div","synthetic":true,"types":[]},{"text":"impl !Send for DivEq","synthetic":true,"types":[]},{"text":"impl !Send for Dollar","synthetic":true,"types":[]},{"text":"impl !Send for Dot","synthetic":true,"types":[]},{"text":"impl !Send for Dot2","synthetic":true,"types":[]},{"text":"impl !Send for Dot3","synthetic":true,"types":[]},{"text":"impl !Send for DotDotEq","synthetic":true,"types":[]},{"text":"impl !Send for Eq","synthetic":true,"types":[]},{"text":"impl !Send for EqEq","synthetic":true,"types":[]},{"text":"impl !Send for Ge","synthetic":true,"types":[]},{"text":"impl !Send for Gt","synthetic":true,"types":[]},{"text":"impl !Send for Le","synthetic":true,"types":[]},{"text":"impl !Send for Lt","synthetic":true,"types":[]},{"text":"impl !Send for MulEq","synthetic":true,"types":[]},{"text":"impl !Send for Ne","synthetic":true,"types":[]},{"text":"impl !Send for Or","synthetic":true,"types":[]},{"text":"impl !Send for OrEq","synthetic":true,"types":[]},{"text":"impl !Send for OrOr","synthetic":true,"types":[]},{"text":"impl !Send for Pound","synthetic":true,"types":[]},{"text":"impl !Send for Question","synthetic":true,"types":[]},{"text":"impl !Send for RArrow","synthetic":true,"types":[]},{"text":"impl !Send for LArrow","synthetic":true,"types":[]},{"text":"impl !Send for Rem","synthetic":true,"types":[]},{"text":"impl !Send for RemEq","synthetic":true,"types":[]},{"text":"impl !Send for FatArrow","synthetic":true,"types":[]},{"text":"impl !Send for Semi","synthetic":true,"types":[]},{"text":"impl !Send for Shl","synthetic":true,"types":[]},{"text":"impl !Send for ShlEq","synthetic":true,"types":[]},{"text":"impl !Send for Shr","synthetic":true,"types":[]},{"text":"impl !Send for ShrEq","synthetic":true,"types":[]},{"text":"impl !Send for Star","synthetic":true,"types":[]},{"text":"impl !Send for Sub","synthetic":true,"types":[]},{"text":"impl !Send for SubEq","synthetic":true,"types":[]},{"text":"impl !Send for Tilde","synthetic":true,"types":[]},{"text":"impl !Send for Brace","synthetic":true,"types":[]},{"text":"impl !Send for Bracket","synthetic":true,"types":[]},{"text":"impl !Send for Paren","synthetic":true,"types":[]},{"text":"impl !Send for Group","synthetic":true,"types":[]},{"text":"impl !Send for Attribute","synthetic":true,"types":[]},{"text":"impl !Send for AttrStyle","synthetic":true,"types":[]},{"text":"impl !Send for Meta","synthetic":true,"types":[]},{"text":"impl !Send for MetaList","synthetic":true,"types":[]},{"text":"impl !Send for MetaNameValue","synthetic":true,"types":[]},{"text":"impl !Send for NestedMeta","synthetic":true,"types":[]},{"text":"impl !Send for Variant","synthetic":true,"types":[]},{"text":"impl !Send for Fields","synthetic":true,"types":[]},{"text":"impl !Send for FieldsNamed","synthetic":true,"types":[]},{"text":"impl !Send for FieldsUnnamed","synthetic":true,"types":[]},{"text":"impl !Send for Field","synthetic":true,"types":[]},{"text":"impl !Send for Visibility","synthetic":true,"types":[]},{"text":"impl !Send for VisPublic","synthetic":true,"types":[]},{"text":"impl !Send for VisCrate","synthetic":true,"types":[]},{"text":"impl !Send for VisRestricted","synthetic":true,"types":[]},{"text":"impl !Send for Expr","synthetic":true,"types":[]},{"text":"impl !Send for ExprArray","synthetic":true,"types":[]},{"text":"impl !Send for ExprAssign","synthetic":true,"types":[]},{"text":"impl !Send for ExprAssignOp","synthetic":true,"types":[]},{"text":"impl !Send for ExprAsync","synthetic":true,"types":[]},{"text":"impl !Send for ExprAwait","synthetic":true,"types":[]},{"text":"impl !Send for ExprBinary","synthetic":true,"types":[]},{"text":"impl !Send for ExprBlock","synthetic":true,"types":[]},{"text":"impl !Send for ExprBox","synthetic":true,"types":[]},{"text":"impl !Send for ExprBreak","synthetic":true,"types":[]},{"text":"impl !Send for ExprCall","synthetic":true,"types":[]},{"text":"impl !Send for ExprCast","synthetic":true,"types":[]},{"text":"impl !Send for ExprClosure","synthetic":true,"types":[]},{"text":"impl !Send for ExprContinue","synthetic":true,"types":[]},{"text":"impl !Send for ExprField","synthetic":true,"types":[]},{"text":"impl !Send for ExprForLoop","synthetic":true,"types":[]},{"text":"impl !Send for ExprGroup","synthetic":true,"types":[]},{"text":"impl !Send for ExprIf","synthetic":true,"types":[]},{"text":"impl !Send for ExprIndex","synthetic":true,"types":[]},{"text":"impl !Send for ExprLet","synthetic":true,"types":[]},{"text":"impl !Send for ExprLit","synthetic":true,"types":[]},{"text":"impl !Send for ExprLoop","synthetic":true,"types":[]},{"text":"impl !Send for ExprMacro","synthetic":true,"types":[]},{"text":"impl !Send for ExprMatch","synthetic":true,"types":[]},{"text":"impl !Send for ExprMethodCall","synthetic":true,"types":[]},{"text":"impl !Send for ExprParen","synthetic":true,"types":[]},{"text":"impl !Send for ExprPath","synthetic":true,"types":[]},{"text":"impl !Send for ExprRange","synthetic":true,"types":[]},{"text":"impl !Send for ExprReference","synthetic":true,"types":[]},{"text":"impl !Send for ExprRepeat","synthetic":true,"types":[]},{"text":"impl !Send for ExprReturn","synthetic":true,"types":[]},{"text":"impl !Send for ExprStruct","synthetic":true,"types":[]},{"text":"impl !Send for ExprTry","synthetic":true,"types":[]},{"text":"impl !Send for ExprTryBlock","synthetic":true,"types":[]},{"text":"impl !Send for ExprTuple","synthetic":true,"types":[]},{"text":"impl !Send for ExprType","synthetic":true,"types":[]},{"text":"impl !Send for ExprUnary","synthetic":true,"types":[]},{"text":"impl !Send for ExprUnsafe","synthetic":true,"types":[]},{"text":"impl !Send for ExprWhile","synthetic":true,"types":[]},{"text":"impl !Send for ExprYield","synthetic":true,"types":[]},{"text":"impl !Send for Member","synthetic":true,"types":[]},{"text":"impl !Send for Index","synthetic":true,"types":[]},{"text":"impl !Send for Generics","synthetic":true,"types":[]},{"text":"impl !Send for GenericParam","synthetic":true,"types":[]},{"text":"impl !Send for TypeParam","synthetic":true,"types":[]},{"text":"impl !Send for LifetimeDef","synthetic":true,"types":[]},{"text":"impl !Send for ConstParam","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for ImplGenerics&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for TypeGenerics&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for Turbofish&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Send for BoundLifetimes","synthetic":true,"types":[]},{"text":"impl !Send for TypeParamBound","synthetic":true,"types":[]},{"text":"impl !Send for TraitBound","synthetic":true,"types":[]},{"text":"impl !Send for TraitBoundModifier","synthetic":true,"types":[]},{"text":"impl !Send for WhereClause","synthetic":true,"types":[]},{"text":"impl !Send for WherePredicate","synthetic":true,"types":[]},{"text":"impl !Send for PredicateType","synthetic":true,"types":[]},{"text":"impl !Send for PredicateLifetime","synthetic":true,"types":[]},{"text":"impl !Send for PredicateEq","synthetic":true,"types":[]},{"text":"impl !Send for Lifetime","synthetic":true,"types":[]},{"text":"impl !Send for Lit","synthetic":true,"types":[]},{"text":"impl !Send for LitStr","synthetic":true,"types":[]},{"text":"impl !Send for LitByteStr","synthetic":true,"types":[]},{"text":"impl !Send for LitByte","synthetic":true,"types":[]},{"text":"impl !Send for LitChar","synthetic":true,"types":[]},{"text":"impl !Send for LitInt","synthetic":true,"types":[]},{"text":"impl !Send for LitFloat","synthetic":true,"types":[]},{"text":"impl !Send for LitBool","synthetic":true,"types":[]},{"text":"impl Send for StrStyle","synthetic":true,"types":[]},{"text":"impl !Send for Macro","synthetic":true,"types":[]},{"text":"impl !Send for MacroDelimiter","synthetic":true,"types":[]},{"text":"impl !Send for DeriveInput","synthetic":true,"types":[]},{"text":"impl !Send for Data","synthetic":true,"types":[]},{"text":"impl !Send for DataStruct","synthetic":true,"types":[]},{"text":"impl !Send for DataEnum","synthetic":true,"types":[]},{"text":"impl !Send for DataUnion","synthetic":true,"types":[]},{"text":"impl !Send for BinOp","synthetic":true,"types":[]},{"text":"impl !Send for UnOp","synthetic":true,"types":[]},{"text":"impl !Send for Type","synthetic":true,"types":[]},{"text":"impl !Send for TypeArray","synthetic":true,"types":[]},{"text":"impl !Send for TypeBareFn","synthetic":true,"types":[]},{"text":"impl !Send for TypeGroup","synthetic":true,"types":[]},{"text":"impl !Send for TypeImplTrait","synthetic":true,"types":[]},{"text":"impl !Send for TypeInfer","synthetic":true,"types":[]},{"text":"impl !Send for TypeMacro","synthetic":true,"types":[]},{"text":"impl !Send for TypeNever","synthetic":true,"types":[]},{"text":"impl !Send for TypeParen","synthetic":true,"types":[]},{"text":"impl !Send for TypePath","synthetic":true,"types":[]},{"text":"impl !Send for TypePtr","synthetic":true,"types":[]},{"text":"impl !Send for TypeReference","synthetic":true,"types":[]},{"text":"impl !Send for TypeSlice","synthetic":true,"types":[]},{"text":"impl !Send for TypeTraitObject","synthetic":true,"types":[]},{"text":"impl !Send for TypeTuple","synthetic":true,"types":[]},{"text":"impl !Send for Abi","synthetic":true,"types":[]},{"text":"impl !Send for BareFnArg","synthetic":true,"types":[]},{"text":"impl !Send for Variadic","synthetic":true,"types":[]},{"text":"impl !Send for ReturnType","synthetic":true,"types":[]},{"text":"impl !Send for Path","synthetic":true,"types":[]},{"text":"impl !Send for PathSegment","synthetic":true,"types":[]},{"text":"impl !Send for PathArguments","synthetic":true,"types":[]},{"text":"impl !Send for GenericArgument","synthetic":true,"types":[]},{"text":"impl !Send for AngleBracketedGenericArguments","synthetic":true,"types":[]},{"text":"impl !Send for Binding","synthetic":true,"types":[]},{"text":"impl !Send for Constraint","synthetic":true,"types":[]},{"text":"impl !Send for ParenthesizedGenericArguments","synthetic":true,"types":[]},{"text":"impl !Send for QSelf","synthetic":true,"types":[]},{"text":"impl !Send for TokenBuffer","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for Cursor&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; Send for Punctuated&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, P&gt; Send for Pairs&lt;'a, T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, P&gt; Send for PairsMut&lt;'a, T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; Send for IntoPairs&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for IntoIter&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !Send for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !Send for IterMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; Send for Pair&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for Lookahead1&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !Send for ParseBuffer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'c, 'a&gt; !Send for StepCursor&lt;'c, 'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Nothing","synthetic":true,"types":[]}];
implementors["xml"] = [{"text":"impl&lt;'a&gt; Send for Name&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'b&gt; Send for ReprDisplay&lt;'a, 'b&gt;","synthetic":true,"types":[]},{"text":"impl Send for OwnedName","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Attribute&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for OwnedAttribute","synthetic":true,"types":[]},{"text":"impl Send for TextPosition","synthetic":true,"types":[]},{"text":"impl Send for XmlVersion","synthetic":true,"types":[]},{"text":"impl Send for Namespace","synthetic":true,"types":[]},{"text":"impl Send for NamespaceStack","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for NamespaceStackMappings&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CheckedTarget&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for ParserConfig","synthetic":true,"types":[]},{"text":"impl Send for XmlEvent","synthetic":true,"types":[]},{"text":"impl Send for ErrorKind","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Send for EventReader&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Send for Events&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for EmitterError","synthetic":true,"types":[]},{"text":"impl Send for EmitterConfig","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for XmlEvent&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for EndElementBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for StartElementBuilder&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;W&gt; Send for EventWriter&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Send,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()