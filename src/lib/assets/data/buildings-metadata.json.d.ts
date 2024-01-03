declare const schema: [{"Id":"HubBuilding","Title":"INTERNAL_DO_NOT_TRANSLATE","Variants":[]},{"Id":"TunnelBuilding","Title":"INTERNAL_DO_NOT_TRANSLATE","Variants":[]},{"Id":"BeltBuilding","Title":"Conveyor Belt","Variants":[{"Id":"BeltDefaultVariant","Title":"Conveyor Belt","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"BeltDefaultForwardInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{}],"FluidContainers":[]},{"Id":"BeltDefaultRightInternalVariant","MirroredInternalVariantId":"BeltDefaultLeftInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Direction_L":1}],"FluidContainers":[]},{"Id":"BeltDefaultLeftInternalVariant","MirroredInternalVariantId":"BeltDefaultRightInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Direction_L":3}],"FluidContainers":[]}]},{"Id":"Splitter1To2Variant","Title":"2-Way Splitter","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"PipetteOverrideVariantId":"BeltDefaultVariant","InternalVariants":[{"Id":"Splitter1To2LInternalVariant","MirroredInternalVariantId":"Splitter1To2RInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{},{"Direction_L":3}],"FluidContainers":[]},{"Id":"Splitter1To2RInternalVariant","MirroredInternalVariantId":"Splitter1To2LInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{},{"Direction_L":1}],"FluidContainers":[]}]},{"Id":"SplitterTShapeVariant","Title":"T-Splitter","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"PipetteOverrideVariantId":"BeltDefaultVariant","InternalVariants":[{"Id":"SplitterTShapeInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Direction_L":3},{"Direction_L":1}],"FluidContainers":[]}]},{"Id":"Merger2To1Variant","Title":"2-Way Merger","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"PipetteOverrideVariantId":"BeltDefaultVariant","InternalVariants":[{"Id":"Merger2To1LInternalVariant","MirroredInternalVariantId":"Merger2To1RInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2},{"Direction_L":3}],"BeltOutputs":[{}],"FluidContainers":[]},{"Id":"Merger2To1RInternalVariant","MirroredInternalVariantId":"Merger2To1LInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2},{"Direction_L":1}],"BeltOutputs":[{}],"FluidContainers":[]}]},{"Id":"Merger3To1Variant","Title":"3-Way Merger","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"PipetteOverrideVariantId":"BeltDefaultVariant","InternalVariants":[{"Id":"Merger3To1InternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2},{"Direction_L":3},{"Direction_L":1}],"BeltOutputs":[{}],"FluidContainers":[]}]},{"Id":"MergerTShapeVariant","Title":"T-Merger","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"PipetteOverrideVariantId":"BeltDefaultVariant","InternalVariants":[{"Id":"MergerTShapeInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":1},{"Direction_L":3}],"BeltOutputs":[{}],"FluidContainers":[]}]},{"Id":"Lift1LayerVariant","Title":"1 Floor Lift","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"PipetteOverrideVariantId":"BeltDefaultVariant","InternalVariants":[{"Id":"Lift1DownBackwardInternalVariant","Tiles":[{"Z":-1},{}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Z":-1},"Direction_L":2}],"FluidContainers":[]},{"Id":"Lift1DownForwardInternalVariant","Tiles":[{"Z":-1},{}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Z":-1}}],"FluidContainers":[]},{"Id":"Lift1DownLeftInternalVariant","MirroredInternalVariantId":"Lift1DownRightInternalVariant","Tiles":[{},{"Z":-1}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Z":-1},"Direction_L":3}],"FluidContainers":[]},{"Id":"Lift1DownRightInternalVariant","MirroredInternalVariantId":"Lift1DownLeftInternalVariant","Tiles":[{},{"Z":-1}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Z":-1},"Direction_L":1}],"FluidContainers":[]},{"Id":"Lift1UpBackwardInternalVariant","Tiles":[{},{"Z":1}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Z":1},"Direction_L":2}],"FluidContainers":[]},{"Id":"Lift1UpForwardInternalVariant","Tiles":[{},{"Z":1}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Z":1}}],"FluidContainers":[]},{"Id":"Lift1UpLeftInternalVariant","MirroredInternalVariantId":"Lift1UpRightInternalVariant","Tiles":[{},{"Z":1}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Z":1},"Direction_L":3}],"FluidContainers":[]},{"Id":"Lift1UpRightInternalVariant","MirroredInternalVariantId":"Lift1UpLeftInternalVariant","Tiles":[{},{"Z":1}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Z":1},"Direction_L":1}],"FluidContainers":[]}]},{"Id":"Lift2LayerVariant","Title":"2 Floor Lift","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"PipetteOverrideVariantId":"BeltDefaultVariant","InternalVariants":[{"Id":"Lift2DownBackwardInternalVariant","Tiles":[{},{"Z":-1},{"Z":-2}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Z":-2},"Direction_L":2}],"FluidContainers":[]},{"Id":"Lift2DownForwardInternalVariant","Tiles":[{},{"Z":-1},{"Z":-2}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Z":-2}}],"FluidContainers":[]},{"Id":"Lift2DownLeftInternalVariant","MirroredInternalVariantId":"Lift2DownRightInternalVariant","Tiles":[{},{"Z":-1},{"Z":-2}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Z":-2},"Direction_L":3}],"FluidContainers":[]},{"Id":"Lift2DownRightInternalVariant","MirroredInternalVariantId":"Lift2DownLeftInternalVariant","Tiles":[{},{"Z":-1},{"Z":-2}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Z":-2},"Direction_L":1}],"FluidContainers":[]},{"Id":"Lift2UpBackwardInternalVariant","Tiles":[{},{"Z":1},{"Z":2}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Z":2},"Direction_L":2}],"FluidContainers":[]},{"Id":"Lift2UpForwardInternalVariant","Tiles":[{},{"Z":1},{"Z":2}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Z":2}}],"FluidContainers":[]},{"Id":"Lift2UpLeftInternalVariant","MirroredInternalVariantId":"Lift2UpRightInternalVariant","Tiles":[{},{"Z":1},{"Z":2}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Z":2},"Direction_L":3}],"FluidContainers":[]},{"Id":"Lift2UpRightInternalVariant","MirroredInternalVariantId":"Lift2UpLeftInternalVariant","Tiles":[{},{"Z":1},{"Z":2}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Z":2},"Direction_L":1}],"FluidContainers":[]}]},{"Id":"BeltPortSenderVariant","Title":"Belt Launcher","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"BeltPortSenderInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[],"FluidContainers":[]}]},{"Id":"BeltPortReceiverVariant","Title":"Belt Catcher","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"BeltPortReceiverInternalVariant","Tiles":[{}],"BeltInputs":[],"BeltOutputs":[{}],"FluidContainers":[]}]}]},{"Id":"RotatorBuilding","Title":"Rotator","Variants":[{"Id":"RotatorOneQuadVariant","Title":"90\u00b0 CW Rotator","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"RotatorOneQuadInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{}],"FluidContainers":[]}]},{"Id":"RotatorOneQuadCCWVariant","Title":"90\u00b0 CCW Rotator","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"RotatorOneQuadCCWInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{}],"FluidContainers":[]}]},{"Id":"RotatorHalfVariant","Title":"180\u00b0 Rotator","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"RotatorHalfInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{}],"FluidContainers":[]}]}]},{"Id":"CutterBuilding","Title":"Cutting","Variants":[{"Id":"CutterHalfVariant","Title":"Half Destroyer","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"CutterHalfInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{}],"FluidContainers":[]}]},{"Id":"CutterDefaultVariant","Title":"Cutter","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"CutterDefaultInternalVariant","MirroredInternalVariantId":"CutterMirroredInternalVariant","Tiles":[{},{"Y":-1}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Y":-1}},{}],"FluidContainers":[]},{"Id":"CutterMirroredInternalVariant","MirroredInternalVariantId":"CutterDefaultInternalVariant","Tiles":[{},{"Y":1}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Y":1}},{}],"FluidContainers":[]}]},{"Id":"HalvesSwapperDefaultVariant","Title":"Swapper","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"HalvesSwapperDefaultInternalVariant","Tiles":[{"Y":-1},{}],"BeltInputs":[{"Direction_L":2},{"Position_L":{"Y":-1},"Direction_L":2}],"BeltOutputs":[{},{"Position_L":{"Y":-1}}],"FluidContainers":[]}]}]},{"Id":"StackerBuilding","Title":"Stacker","Variants":[{"Id":"StackerDefaultVariant","Title":"Stacker","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"StackerDefaultInternalVariant","MirroredInternalVariantId":"StackerMirroredInternalVariant","Tiles":[{},{"Z":1}],"BeltInputs":[{"Direction_L":2},{"Position_L":{"Z":1},"Direction_L":2}],"BeltOutputs":[{"Direction_L":3}],"FluidContainers":[]},{"Id":"StackerMirroredInternalVariant","MirroredInternalVariantId":"StackerDefaultInternalVariant","Tiles":[{},{"Z":1}],"BeltInputs":[{"Direction_L":2},{"Position_L":{"Z":1},"Direction_L":2}],"BeltOutputs":[{"Direction_L":1}],"FluidContainers":[]}]},{"Id":"UnstackerDefaultVariant","Title":"Unstacker","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"UnstackerDefaultInternalVariant","Tiles":[{},{"Z":1}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{},{"Position_L":{"Z":1}}],"FluidContainers":[]}]}]},{"Id":"PinPusherBuilding","Title":"Pin Pusher","Variants":[{"Id":"PinPusherDefaultVariant","Title":"Pin Pusher","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"PinPusherDefaultInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{}],"FluidContainers":[]}]}]},{"Id":"ExtractorBuilding","Title":"Extractor","Variants":[{"Id":"ExtractorDefaultVariant","Title":"Extractor","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"ExtractorDefaultInternalVariant","Tiles":[{}],"BeltInputs":[],"BeltOutputs":[{}],"FluidContainers":[]}]}]},{"Id":"TrashBuilding","Title":"Trash","Variants":[{"Id":"TrashDefaultVariant","Title":"Trash","Removable":true,"Selectable":true,"PlayerBuildable":true,"InternalVariants":[{"Id":"TrashDefaultInternalVariant","Tiles":[{}],"BeltInputs":[{},{"Direction_L":1},{"Direction_L":2},{"Direction_L":3}],"BeltOutputs":[],"FluidContainers":[]}]}]},{"Id":"ShapePackerBuilding","Title":"Shape Packer","Variants":[{"Id":"ShapePackerDefaultVariant","Title":"Shape Packer","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"ShapePackerDefaultInternalVariant","Tiles":[{},{"Y":-1}],"BeltInputs":[{"Direction_L":2},{"Position_L":{"Y":-1},"Direction_L":2}],"BeltOutputs":[{}],"FluidContainers":[]}]},{"Id":"ShapeUnpackerDefaultVariant","Title":"Shape Unpacker","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"ShapeUnpackerDefaultInternalVariant","Tiles":[{},{"Y":-1}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{},{"Position_L":{"Y":-1}}],"FluidContainers":[]}]}]},{"Id":"PipeBuilding","Title":"Pipe","Variants":[{"Id":"PipeDefaultVariant","Title":"Pipe","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"PipeForwardInternalVariant","Tiles":[{}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[{"Name":"Pipe","Max":50.0,"AllowDrain":true,"AllowGain":true,"Connections":[{"Direction_L":2},{}]}]},{"Id":"PipeRightInternalVariant","MirroredInternalVariantId":"PipeLeftInternalVariant","Tiles":[{}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[{"Name":"Pipe","Max":50.0,"AllowDrain":true,"AllowGain":true,"Connections":[{"Direction_L":2},{"Direction_L":1}]}]},{"Id":"PipeLeftInternalVariant","MirroredInternalVariantId":"PipeRightInternalVariant","Tiles":[{}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[{"Name":"Pipe","Max":50.0,"AllowDrain":true,"AllowGain":true,"Connections":[{"Direction_L":2},{"Direction_L":3}]}]},{"Id":"PipeCrossInternalVariant","Tiles":[{}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[{"Name":"PipeCross","Max":50.0,"AllowDrain":true,"AllowGain":true,"Connections":[{},{"Direction_L":1},{"Direction_L":2},{"Direction_L":3}]}]},{"Id":"PipeJunctionInternalVariant","Tiles":[{}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[{"Name":"Pipe","Max":50.0,"AllowDrain":true,"AllowGain":true,"Connections":[{},{"Direction_L":1},{"Direction_L":3}]}]}]},{"Id":"Pipe1LayerVariant","Title":"Pipe Up/Down","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"PipetteOverrideVariantId":"PipeDefaultVariant","InternalVariants":[{"Id":"PipeDownBackwardInternalVariant","Tiles":[{},{"Z":-1}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[{"Name":"Pipe","Max":50.0,"AllowDrain":true,"AllowGain":true,"Connections":[{"Direction_L":2},{"Position_L":{"Z":-1},"Direction_L":2}]}]},{"Id":"PipeDownForwardInternalVariant","Tiles":[{},{"Z":-1}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[{"Name":"Pipe","Max":50.0,"AllowDrain":true,"AllowGain":true,"Connections":[{"Direction_L":2},{"Position_L":{"Z":-1}}]}]},{"Id":"PipeDownLeftInternalVariant","MirroredInternalVariantId":"PipeDownRightInternalVariant","Tiles":[{},{"Z":-1}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[{"Name":"Pipe","Max":50.0,"AllowDrain":true,"AllowGain":true,"Connections":[{"Direction_L":2},{"Position_L":{"Z":-1},"Direction_L":3}]}]},{"Id":"PipeDownRightInternalVariant","MirroredInternalVariantId":"PipeDownLeftInternalVariant","Tiles":[{},{"Z":-1}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[{"Name":"Pipe","Max":50.0,"AllowDrain":true,"AllowGain":true,"Connections":[{"Direction_L":2},{"Position_L":{"Z":-1},"Direction_L":1}]}]},{"Id":"PipeUpBackwardInternalVariant","Tiles":[{},{"Z":1}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[{"Name":"Pipe","Max":50.0,"AllowDrain":true,"AllowGain":true,"Connections":[{"Direction_L":2},{"Position_L":{"Z":1},"Direction_L":2}]}]},{"Id":"PipeUpForwardInternalVariant","Tiles":[{},{"Z":1}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[{"Name":"Pipe","Max":50.0,"AllowDrain":true,"AllowGain":true,"Connections":[{"Direction_L":2},{"Position_L":{"Z":1}}]}]},{"Id":"PipeUpLeftInternalVariant","MirroredInternalVariantId":"PipeUpRightInternalVariant","Tiles":[{},{"Z":1}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[{"Name":"Pipe","Max":50.0,"AllowDrain":true,"AllowGain":true,"Connections":[{"Direction_L":2},{"Position_L":{"Z":1},"Direction_L":3}]}]},{"Id":"PipeUpRightInternalVariant","MirroredInternalVariantId":"PipeUpLeftInternalVariant","Tiles":[{},{"Z":1}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[{"Name":"Pipe","Max":50.0,"AllowDrain":true,"AllowGain":true,"Connections":[{"Direction_L":2},{"Position_L":{"Z":1},"Direction_L":1}]}]}]}]},{"Id":"PumpBuilding","Title":"Pump","Variants":[{"Id":"PumpDefaultVariant","Title":"Pump","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"PumpDefaultInternalVariant","Tiles":[{}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[{"Name":"Pump","Max":150.0,"AllowDrain":true,"Connections":[{}]}]}]}]},{"Id":"PainterBuilding","Title":"Painters","Variants":[{"Id":"PainterDefaultVariant","Title":"Topmost Painter","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"PainterDefaultInternalVariant","Tiles":[{"Y":-1},{}],"BeltInputs":[{"Position_L":{"Y":-1},"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Y":-1}}],"FluidContainers":[{"Name":"Painter","Max":150.0,"AllowDrain":true,"AllowGain":true,"Connections":[{},{"Direction_L":1},{"Direction_L":2}]}]}]},{"Id":"PainterFullVariant","Title":"Deep Painter","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"PainterFullInternalVariant","Tiles":[{"Y":-1},{}],"BeltInputs":[{"Position_L":{"Y":-1},"Direction_L":2}],"BeltOutputs":[{"Position_L":{"Y":-1}}],"FluidContainers":[{"Name":"Painter","Max":200.0,"AllowDrain":true,"AllowGain":true,"Connections":[{"Direction_L":2}]}]}]}]},{"Id":"MixerBuilding","Title":"Color Mixer","Variants":[{"Id":"MixerDefaultVariant","Title":"Color Mixer","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"MixerDefaultInternalVariant","Tiles":[{},{"X":1},{"X":2},{"Y":-1},{"X":1,"Y":-1}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[{"Name":"MixerInput0","Max":150.0,"AllowDrain":true,"AllowGain":true,"Position_L":{"Y":-1.0},"Connections":[{"Position_L":{"Y":-1},"Direction_L":2}]},{"Name":"MixerInput1","Max":150.0,"AllowDrain":true,"AllowGain":true,"Connections":[{"Direction_L":2}]},{"Name":"MixerOutput","Max":150.0,"AllowDrain":true,"Position_L":{"X":2.0},"Connections":[{"Position_L":{"X":2}}]}]}]}]},{"Id":"FluidPackerBuilding","Title":"Fluid Packer","Variants":[{"Id":"FluidPackerDefaultVariant","Title":"Fluid Packer","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"FluidPackerDefaultInternalVariant","Tiles":[{},{"Z":1}],"BeltInputs":[],"BeltOutputs":[{}],"FluidContainers":[{"Name":"FluidPacker","Max":2000.0,"AllowDrain":true,"AllowGain":true,"Connections":[{"Position_L":{"Z":1},"Direction_L":2}]}]}]},{"Id":"FluidUnpackerDefaultVariant","Title":"Fluid Unpacker","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"FluidUnpackerDefaultInternalVariant","Tiles":[{},{"Z":1}],"BeltInputs":[{"Position_L":{"Z":1},"Direction_L":2}],"BeltOutputs":[],"FluidContainers":[{"Name":"FluidPacker","Max":2000.0,"AllowDrain":true,"AllowGain":true,"Connections":[{"Direction_L":2}]}]}]}]},{"Id":"TrainStationBuilding","Title":"Train Station","Variants":[{"Id":"TrainStationLoaderVariant","Title":"Train Loader","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"TrainStationLoaderInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[],"FluidContainers":[]}]},{"Id":"TrainStationUnloaderVariant","Title":"Train Unloader","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"TrainStationUnloaderInternalVariant","Tiles":[{}],"BeltInputs":[],"BeltOutputs":[{}],"FluidContainers":[]}]}]},{"Id":"CrystalGeneratorBuilding","Title":"Crystal Generator","Variants":[{"Id":"CrystalGeneratorDefaultVariant","Title":"Crystal Generator","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"CrystalGeneratorDefaultInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{}],"FluidContainers":[{"Name":"CrystalGenerator","Max":50.0,"AllowGain":true,"Connections":[{"Direction_L":3}]}]}]}]},{"Id":"FluidStorageBuilding","Title":"Fluid Tank","Variants":[{"Id":"FluidStorageDefaultVariant","Title":"Fluid Tank","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"FluidStorageDefaultInternalVariant","Tiles":[{"X":-1},{"X":-1,"Y":-1},{},{"Y":-1}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[{"Name":"FluidStorage","Max":10000.0,"AllowDrain":true,"AllowGain":true,"Connections":[{"Position_L":{"X":-1},"Direction_L":2},{"Position_L":{"Y":-1}}]}]}]}]},{"Id":"SandboxItemProducerBuilding","Title":"Item Producer","Variants":[{"Id":"SandboxItemProducerDefaultVariant","Title":"Item Producer","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"SandboxItemProducerDefaultInternalVariant","Tiles":[{}],"BeltInputs":[],"BeltOutputs":[{}],"FluidContainers":[]}]}]},{"Id":"SandboxFluidProducerBuilding","Title":"Fluid Producer","Variants":[{"Id":"SandboxFluidProducerDefaultVariant","Title":"Fluid Producer","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"SandboxFluidProducerDefaultInternalVariant","Tiles":[{}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[{"Name":"Container","Max":500.0,"AllowDrain":true,"Connections":[{}]}]}]}]},{"Id":"LabelBuilding","Title":"Label","Variants":[{"Id":"LabelDefaultVariant","Title":"Label","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"LabelDefaultInternalVariant","Tiles":[{"X":-1},{},{"X":1},{"X":-2},{"X":2}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[]}]}]},{"Id":"BeltReaderBuilding","Title":"Belt Reader","Variants":[{"Id":"BeltReaderDefaultVariant","Title":"Belt Reader","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"BeltReaderDefaultInternalVariant","Tiles":[{}],"BeltInputs":[{"Direction_L":2}],"BeltOutputs":[{}],"FluidContainers":[]}]}]},{"Id":"ArtistPlaygroundBuilding","Title":"Test Building","Variants":[{"Id":"ArtistPlaygroundBuildingVariant","Title":"Test Building","Removable":true,"Selectable":true,"PlayerBuildable":true,"AutoConnectBelts":true,"InternalVariants":[{"Id":"ArtistPlaygroundBuildingInternalVariant","Tiles":[{}],"BeltInputs":[],"BeltOutputs":[],"FluidContainers":[]}]}]}]; export default schema;