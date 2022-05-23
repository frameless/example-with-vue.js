<script setup lang="ts">
import {
  Article,
  BadgeStatus,
  Button,
  ButtonGroup,
  Checkbox,
  FormField,
  FormFieldset,
  FormFieldsetLegend,
  FormLabel,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Link,
  Paragraph,
  RadioButton,
  Select,
  SelectOption,
  Textbox,
  Textarea,
} from "@utrecht/component-library-vue";
import ExampleStory from "../components/ExampleStory.vue";
</script>
<script lang="ts">
export default {
  data() {
    const fileA = { name: "File A.doc" };
    const fileB = { name: "File B.doc" };
    const fileC = { name: "File C.doc" };
    const fileD = { name: "File D.doc" };
    const fileE = { name: "File E.doc" };
    const fileF = { name: "File F.doc" };
    const files = [fileB];
    const fileSet = new Set([fileB]);
    const fullSet = new Set([fileA, fileB, fileC]);
    const otherSet = new Set([fileD, fileE, fileF]);
    const emptySet = new Set([]);
    return {
      textarea:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      textbox: "The Quick Brown Fox Jumps Over The Lazy Dog",
      checkbox: "B",
      checkboxA: "A",
      checkboxAYes: "A",
      checkboxANo: "not A",
      checkboxB: "B",
      checkboxValueB: "B",
      checkboxC: "",
      checkboxValueC: "C",
      checkboxBoolean: true,
      files,
      fileSet,
      fullSet,
      emptySet,
      otherSet,
      fileA,
      fileB,
      fileC,
      fileD,
      fileE,
      fileF,
      select: "B",
      selectOptions: [
        { label: "One", value: "A" },
        { label: "Two", value: "B" },
        { label: "Three", value: "C" },
      ],
      radioOptions: [
        { label: "One", value: "1" },
        { label: "Two", value: "2" },
        { label: "Three", value: "3" },
      ],
      radio: "2",
      radioValue1: "1",
      radioValue2: "2",
      radioValue3: "3",
      singleCheckbox: "",
      checkboxSelectedOptions: ["B"],
      checkboxSelectedOptionsSet: new Set(["B"]),
      checkboxOptions: [
        { label: "One", value: "A" },
        { label: "Two", value: "B" },
        { label: "Three", value: "C" },
      ],
    };
  },
};
</script>

<template>
  <Article>
    <!--
		<ExampleStory name="Radio button group">
			<FormFieldset>
				<FormFieldsetLegend>Radio group</FormFieldsetLegend>
				<FormField v-for="option in radioOptions" v-bind:key="option.value">
					<FormLabel type="radio">{{ option.label }} </FormLabel>
					<RadioButton
						name="radio"
						v-model="radio"
						:value="option.value"
					/>
				</FormField>
			</FormFieldset>
			<pre>{{ JSON.stringify(radio) }}</pre>
		</ExampleStory>
		<ExampleStory name="Checkbox from browser (with form bindings)">
			<input type="checkbox" v-model="singleCheckbox" />
			<pre>{{ JSON.stringify(singleCheckbox) }}</pre>
		</ExampleStory>
		<ExampleStory name="Checkbox from browser (with true/false form bindings)">
			<input
				:false-value="0"
				:true-value="1"
				type="checkbox"
				v-model="singleCheckbox"
			/>
			<pre>{{ JSON.stringify(singleCheckbox) }}</pre>
		</ExampleStory>
		<ExampleStory name="Checkbox from design system (with form bindings)">
			<Checkbox v-model="singleCheckbox" :value="true" />
			<pre>{{ JSON.stringify(singleCheckbox) }}</pre>
		</ExampleStory>
		<ExampleStory
			name="Checkbox from design system (with form bindings to boolean value)"
		>
			<Checkbox v-model="checkboxBoolean" :value="true" />
			<pre>{{ JSON.stringify(checkboxBoolean) }}</pre>
		</ExampleStory>
		<ExampleStory
			name="Checkbox from design system (with form bindings to boolean value, inverse values)"
		>
			<Checkbox
				v-model="checkboxBoolean"
				:true-value="false"
				:false-value="true"
			/>
			<pre>{{ JSON.stringify(checkboxBoolean) }}</pre>
		</ExampleStory>
		<ExampleStory
			name="Checkbox from design system (with form bindings to boolean value, indeterminate value)"
		>
			<Checkbox
				v-model="checkboxBoolean"
				:true-value="true"
				:false-value="true"
			/>
			<pre>{{ JSON.stringify(checkboxBoolean) }}</pre>
		</ExampleStory>	-->
    <ExampleStory name="Checkbox tree">
      <ul>
        <li>
          <FormField>
            <Checkbox
              v-model="files"
              :true-value="[fileA, fileB, fileC]"
              :false-value="[]"
              name="files"
            />
          </FormField>
          <ul>
            <li>
              <FormField>
                <FormLabel type="checkbox">File A</FormLabel>
                <Checkbox v-model="files" :value="fileA" name="file-a" />
              </FormField>
            </li>
            <li>
              <FormField>
                <FormLabel type="checkbox">File B</FormLabel>
                <Checkbox v-model="files" :value="fileB" name="file-b" />
              </FormField>
            </li>
            <li>
              <FormField>
                <FormLabel type="checkbox">File C</FormLabel>
                <Checkbox v-model="files" :value="fileC" name="file-c" />
              </FormField>
            </li>
          </ul>
        </li>
      </ul>
      <pre>{{ JSON.stringify(files) }}</pre>
    </ExampleStory>
    <!--
		<ExampleStory name="Checkbox tree">
			<ul>
				<li>
					<FormField>
						<Checkbox
							v-model="files"
							:true-value="[fileA, fileB, fileC]"
							:false-value="[fileD, fileE, fileF]"
							name="files"
						/>
					</FormField>
					<ul>
						<li>
							<FormField>
								<FormLabel type="checkbox">File A</FormLabel>
								<Checkbox
									v-model="files"
									:value="fileA"
									name="file-a"
								/>
							</FormField>
						</li>
						<li>
							<FormField>
								<FormLabel type="checkbox">File B</FormLabel>
								<Checkbox
									v-model="files"
									:value="fileB"
									name="file-b"
								/>
							</FormField>
						</li>
						<li>
							<FormField>
								<FormLabel type="checkbox">File C</FormLabel>
								<Checkbox
									v-model="files"
									:value="fileC"
									name="file-c"
								/>
							</FormField>
						</li>
						<li>
							<FormField>
								<FormLabel type="checkbox">File D</FormLabel>
								<Checkbox
									v-model="files"
									:value="fileD"
									name="file-d"
								/>
							</FormField>
						</li>
						<li>
							<FormField>
								<FormLabel type="checkbox">File E</FormLabel>
								<Checkbox
									v-model="files"
									:value="fileE"
									name="file-e"
								/>
							</FormField>
						</li>
						<li>
							<FormField>
								<FormLabel type="checkbox">File F</FormLabel>
								<Checkbox
									v-model="files"
									:value="fileF"
									name="file-f"
								/>
							</FormField>
						</li>
					</ul>
				</li>
			</ul>
			<pre>{{ JSON.stringify(files) }}</pre>
		</ExampleStory>
		<ExampleStory name="Checkbox tree (Set)">
			<ul>
				<li>
					<FormField>
						<Checkbox
							v-model="fileSet"
							:true-value="fullSet"
							:false-value="otherSet"
							name="files"
						/>
					</FormField>
					<ul>
						<li>
							<FormField>
								<FormLabel type="checkbox">File A</FormLabel>
								<Checkbox
									v-model="fileSet"
									:value="fileA"
									name="file-a"
								/>
							</FormField>
						</li>
						<li>
							<FormField>
								<FormLabel type="checkbox">File B</FormLabel>
								<Checkbox
									v-model="fileSet"
									:value="fileB"
									name="file-b"
								/>
							</FormField>
						</li>
						<li>
							<FormField>
								<FormLabel type="checkbox">File C</FormLabel>
								<Checkbox
									v-model="fileSet"
									:value="fileC"
									name="file-c"
								/>
							</FormField>
						</li>
						<li>
							<FormField>
								<FormLabel type="checkbox">File D</FormLabel>
								<Checkbox
									v-model="fileSet"
									:value="fileD"
									name="file-d"
								/>
							</FormField>
						</li>
						<li>
							<FormField>
								<FormLabel type="checkbox">File E</FormLabel>
								<Checkbox
									v-model="fileSet"
									:value="fileE"
									name="file-e"
								/>
							</FormField>
						</li>
						<li>
							<FormField>
								<FormLabel type="checkbox">File F</FormLabel>
								<Checkbox
									v-model="fileSet"
									:value="fileF"
									name="file-f"
								/>
							</FormField>
						</li>
					</ul>
				</li>
			</ul>
			<pre>{{ JSON.stringify(Array.from(fileSet)) }}</pre>
		</ExampleStory>
		<ExampleStory
			name="Checkbox from design system (with true/false form bindings)"
		>
			<Checkbox
				v-model="singleCheckbox"
				:true-value="1"
				:false-value="0"
			/>
			<pre>{{ JSON.stringify(singleCheckbox) }}</pre>
		</ExampleStory>
		<ExampleStory name="Disabled checkbox from design system (with form bindings)">
			<Checkbox v-model="singleCheckbox" disabled />
			<pre>{{ JSON.stringify(singleCheckbox) }}</pre>
		</ExampleStory>
		<ExampleStory name="Checked checkbox from browser">
			<input type="checkbox" checked />
		</ExampleStory>
		<ExampleStory name="Checked checkbox from design system">
			<Checkbox checked />
		</ExampleStory>
		<ExampleStory
			name="Checkbox group with browser checkboxes (with form bindings)"
		>
			<FormField v-for="option in checkboxOptions" v-bind:key="option.value">
				<FormLabel type="checkbox">{{ option.label }}</FormLabel>
				<input
					type="checkbox"
					v-model="checkboxSelectedOptions"
					:value="option.value"
				/>
			</FormField>
			{{ checkboxSelectedOptions }}
		</ExampleStory>
		<ExampleStory
			name="Checkbox group with design system checkboxes (with form bindings)"
		>
			<FormField v-for="option in checkboxOptions" v-bind:key="option.value">
				<FormLabel type="checkbox">{{ option.label }}</FormLabel>
				<Checkbox
					v-model="checkboxSelectedOptions"
					:value="option.value"
				/>
			</FormField>
			{{ checkboxSelectedOptions }}
		</ExampleStory>
		<ExampleStory
			name="Checkbox group with design system checkboxes with hardcoded checked state (with form bindings)"
		>
			<FormField v-for="option in checkboxOptions" v-bind:key="option.value">
				<FormLabel type="checkbox">{{ option.label }}</FormLabel>
				<Checkbox
					v-model="checkboxSelectedOptions"
					:value="option.value"
					checked
				/>
			</FormField>
			{{ checkboxSelectedOptions }}
		</ExampleStory>
		<ExampleStory
			name="Checkbox group with design system checkboxes with hardcoded unchecked state (with form bindings)"
		>
			<FormField v-for="option in checkboxOptions" v-bind:key="option.value">
				<FormLabel type="checkbox">{{ option.label }}</FormLabel>
				<Checkbox
					v-model="checkboxSelectedOptions"
					:value="option.value"
					:checked="false"
				/>
			</FormField>
			{{ checkboxSelectedOptions }}
		</ExampleStory>
		<ExampleStory
			name="Checkbox group with browser checkboxes with Set (with form bindings)"
		>
			<FormField v-for="option in checkboxOptions" v-bind:key="option.value">
				<FormLabel type="checkbox">{{ option.label }}</FormLabel>
				<input
					type="checkbox"
					v-model="checkboxSelectedOptionsSet"
					:value="option.value"
				/>
			</FormField>
			{{ checkboxSelectedOptionsSet }}
		</ExampleStory>
		<ExampleStory
			name="Checkbox group with design system checkboxes with Set (with form bindings)"
		>
			<FormField v-for="option in checkboxOptions" v-bind:key="option.value">
				<FormLabel type="checkbox">{{ option.label }}</FormLabel>
				<Checkbox
					v-model="checkboxSelectedOptionsSet"
					:value="option.value"
				/>
			</FormField>
			{{ checkboxSelectedOptionsSet }}
		</ExampleStory>
		<ExampleStory name="Checkbox (with form bindings)">
			<Checkbox v-model="singleCheckbox" value="X" />
			<pre>{{ JSON.stringify(singleCheckbox) }}</pre>
		</ExampleStory>		-->

    <ExampleStory name="Heading 1">
      <Heading1>The Quick Brown Fox Jumps Over The Lazy Dog</Heading1>
    </ExampleStory>
    <ExampleStory name="Heading 2">
      <Heading2>The Quick Brown Fox Jumps Over The Lazy Dog</Heading2>
    </ExampleStory>
    <ExampleStory name="Heading 3">
      <Heading3>The Quick Brown Fox Jumps Over The Lazy Dog</Heading3>
    </ExampleStory>
    <ExampleStory name="Heading 4">
      <Heading4>The Quick Brown Fox Jumps Over The Lazy Dog</Heading4>
    </ExampleStory>
    <ExampleStory name="Heading 5">
      <Heading5>The Quick Brown Fox Jumps Over The Lazy Dog</Heading5>
    </ExampleStory>
    <ExampleStory name="Heading 6">
      <Heading6>The Quick Brown Fox Jumps Over The Lazy Dog</Heading6>
    </ExampleStory>
    <ExampleStory name="Status badge">
      <BadgeStatus>Foo</BadgeStatus>
    </ExampleStory>
    <ExampleStory name="Paragraph">
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.</Paragraph
      >
    </ExampleStory>
    <ExampleStory name="Lead paragraph">
      <Paragraph lead>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
    </ExampleStory>
    <ExampleStory name="Form label"><FormLabel>Name</FormLabel></ExampleStory>
    <ExampleStory name="Link"><Link href="/">Home</Link></ExampleStory>
    <ExampleStory name="External link">
      <Link external target="_blank" href="https://vitejs.dev/">Vite</Link>
    </ExampleStory>
    <ExampleStory name="Button"><Button>Default</Button></ExampleStory>
    <ExampleStory name="Disabled button"
      ><Button disabled>Disabled</Button></ExampleStory
    >
    <ExampleStory name="Primary action button"
      ><Button appearance="primary-action-button"
        >Primary action</Button
      ></ExampleStory
    >
    <ExampleStory name="Disabled primary action button"
      ><Button appearance="primary-action-button" disabled
        >Primary action</Button
      ></ExampleStory
    >
    <ExampleStory name="Secondary action button"
      ><Button appearance="secondary-action-button"
        >Secondary action</Button
      ></ExampleStory
    >
    <ExampleStory name="Disabled secondary action button"
      ><Button appearance="secondary-action-button" disabled
        >Secondary action</Button
      ></ExampleStory
    >
    <ExampleStory name="Subtle button">
      <Button appearance="subtle-button">Subtle</Button>
    </ExampleStory>
    <ExampleStory name="Disabled subtle button">
      <Button appearance="subtle-button" disabled>Subtle</Button>
    </ExampleStory>
    <ExampleStory name="Busy button"><Button busy>Busy</Button></ExampleStory>
    <ExampleStory name="Submit button">
      <Button type="submit">Submit</Button>
    </ExampleStory>
    <ExampleStory name="Textbox">
      <Textbox v-model="textbox" />
    </ExampleStory>
    <ExampleStory name="Disabled textbox">
      <Textbox v-model="textbox" disabled />
    </ExampleStory>
    <ExampleStory name="Readonly textbox">
      <Textbox v-model="textbox" readonly />
    </ExampleStory>
    <ExampleStory name="Required textbox">
      <Textbox v-model="textbox" required />
    </ExampleStory>
    <ExampleStory name="Invalid textbox">
      <Textbox v-model="textbox" invalid />
    </ExampleStory>
    <ExampleStory name="Textbox with placeholder">
      <Textbox v-model="textbox" placeholder="Placeholder" />
    </ExampleStory>
    <ExampleStory name="Textarea">
      <Textarea v-model="textarea" />
    </ExampleStory>
    <ExampleStory name="Disabled textarea">
      <Textarea v-model="textarea" disabled />
    </ExampleStory>
    <ExampleStory name="Readonly textarea">
      <Textarea v-model="textarea" readonly />
    </ExampleStory>
    <ExampleStory name="Required textarea">
      <Textarea v-model="textarea" required />
    </ExampleStory>
    <ExampleStory name="Invalid textarea">
      <Textarea v-model="textarea" invalid />
    </ExampleStory>
    <ExampleStory name="Textarea with placeholder">
      <Textarea v-model="textarea" placeholder="Placeholder" />
    </ExampleStory>
    <ExampleStory name="Checkbox">
      <Checkbox />
    </ExampleStory>
    <ExampleStory name="Disabled checkbox">
      <Checkbox disabled />
    </ExampleStory>
    <ExampleStory
      name="Checkbox group (with true-value and false-value form bindings)"
    >
      <FormFieldset>
        <FormFieldsetLegend>Checkbox group</FormFieldsetLegend>
        <FormField>
          <FormLabel
            for="3b95eaab-090a-453a-a5f7-0e1d2bf3dcb1"
            type="checkbox"
            checked
            >Option A ({{ checkboxAYes }} vs {{ checkboxANo }})
          </FormLabel>
          <Checkbox
            id="3b95eaab-090a-453a-a5f7-0e1d2bf3dcb1"
            :true-value="checkboxAYes"
            :false-value="checkboxANo"
            v-model="checkboxA"
          />
        </FormField>
        <FormField>
          <FormLabel for="f18dc4b2-51e8-457d-bfe6-1c0add6cbbc7" type="checkbox"
            >Option B
          </FormLabel>
          <Checkbox
            id="f18dc4b2-51e8-457d-bfe6-1c0add6cbbc7"
            true-value="B"
            v-model="checkbox"
          />
        </FormField>
        <FormField>
          <FormLabel
            for="1cab8a1a-2a7e-49b7-8d77-a0427e808f9b"
            type="checkbox"
            disabled
            >Disabled option C
          </FormLabel>
          <Checkbox
            id="1cab8a1a-2a7e-49b7-8d77-a0427e808f9b"
            disabled
            true-value="C"
            v-model="checkbox"
          />
        </FormField>
      </FormFieldset>
    </ExampleStory>
    <ExampleStory name="Radio button">
      <RadioButton />
    </ExampleStory>
    <ExampleStory name="Checked radio button">
      <RadioButton checked />
    </ExampleStory>
    <ExampleStory name="Not checked radio button">
      <RadioButton :checked="false" />
    </ExampleStory>
    <ExampleStory name="Disabled radio button">
      <RadioButton disabled />
    </ExampleStory>
    <ExampleStory name="Reference select">
      <select v-model="select">
        <option
          v-for="option in selectOptions"
          :value="option.value"
          v-bind:key="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </ExampleStory>
    <ExampleStory name="Select">
      <Select v-model="select">
        <SelectOption
          v-for="option in selectOptions"
          :value="option.value"
          v-bind:key="option.value"
        >
          {{ option.label }}
        </SelectOption>
      </Select>
    </ExampleStory>
    <ExampleStory name="Button group">
      <ButtonGroup>
        <Button appearance="primary-action-button">Submit</Button>
        <Button appearance="secondary-action-button">Cancel</Button>
      </ButtonGroup>
    </ExampleStory>
  </Article>
</template>
