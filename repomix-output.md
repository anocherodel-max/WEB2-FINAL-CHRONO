This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
chrono-dashboard/.git/COMMIT_EDITMSG
chrono-dashboard/.git/config
chrono-dashboard/.git/description
chrono-dashboard/.git/gk/config
chrono-dashboard/.git/HEAD
chrono-dashboard/.git/hooks/applypatch-msg.sample
chrono-dashboard/.git/hooks/commit-msg.sample
chrono-dashboard/.git/hooks/fsmonitor-watchman.sample
chrono-dashboard/.git/hooks/post-update.sample
chrono-dashboard/.git/hooks/pre-applypatch.sample
chrono-dashboard/.git/hooks/pre-commit.sample
chrono-dashboard/.git/hooks/pre-merge-commit.sample
chrono-dashboard/.git/hooks/pre-push.sample
chrono-dashboard/.git/hooks/pre-rebase.sample
chrono-dashboard/.git/hooks/pre-receive.sample
chrono-dashboard/.git/hooks/prepare-commit-msg.sample
chrono-dashboard/.git/hooks/push-to-checkout.sample
chrono-dashboard/.git/hooks/sendemail-validate.sample
chrono-dashboard/.git/hooks/update.sample
chrono-dashboard/.git/index
chrono-dashboard/.git/info/exclude
chrono-dashboard/.git/logs/HEAD
chrono-dashboard/.git/logs/refs/heads/master
chrono-dashboard/.git/objects/08/0d6c77ac21bb2ef88a6992b2b73ad93daaca92
chrono-dashboard/.git/objects/1f/03afeece5ac28064fa3c73a29215037465f789
chrono-dashboard/.git/objects/32/0a416f822bbbab9232596266e41c1a0645de38
chrono-dashboard/.git/objects/37/845757234ccb68531c10cf7a2ffc589c47e342
chrono-dashboard/.git/objects/4d/29575de80483b005c29bfcac5061cd2f45313e
chrono-dashboard/.git/objects/52/53d3ad9e6be6690549cb255f5952337b02401d
chrono-dashboard/.git/objects/58/beeaccd87e230076cab531b8f418f40b6d1aeb
chrono-dashboard/.git/objects/74/b5e053450a48a6bdb4d71aad648e7af821975c
chrono-dashboard/.git/objects/7b/1e172334cdc980bee9ad6a8a87cf21e0ed18d8
chrono-dashboard/.git/objects/8e/29b36dea7f04ae8729d8b33ecc05c3c9b0fe46
chrono-dashboard/.git/objects/8f/2609b7b3e0e3897ab3bcaad13caf6876e48699
chrono-dashboard/.git/objects/9d/fc1c058cebbef8b891c5062be6f31033d7d186
chrono-dashboard/.git/objects/a1/1777cc471a4344702741ab1c8a588998b1311a
chrono-dashboard/.git/objects/a4/e47a6545bc15971f8f63fba70e4013df88a664
chrono-dashboard/.git/objects/a9/ae81ec66cc71915511974a1bd6cb6d08db212d
chrono-dashboard/.git/objects/aa/069f27cbd9d53394428171c3989fd03db73c76
chrono-dashboard/.git/objects/cf/261d3b38113169d6b2f5343f445fe41d84962b
chrono-dashboard/.git/objects/d5/63c0fb10ba0e42724b21286eb546ee4e5734fc
chrono-dashboard/.git/objects/e9/e57dc4d41b9b46e05112e9f45b7ea6ac0ba15e
chrono-dashboard/.git/objects/ec/2585e8c0bb8188184ed1e0703c4c8f2a8419b0
chrono-dashboard/.git/objects/f7/251c5082bdb322a0be6d37f6606b0c030b33c7
chrono-dashboard/.git/objects/fc/44b0a3796c0e0a64c3d858ca038bd4570465d9
chrono-dashboard/.git/refs/heads/master
chrono-dashboard/.gitignore
chrono-dashboard/package.json
chrono-dashboard/postcss.config.js
chrono-dashboard/public/favicon.ico
chrono-dashboard/public/index.html
chrono-dashboard/public/logo192.png
chrono-dashboard/public/logo512.png
chrono-dashboard/public/manifest.json
chrono-dashboard/public/robots.txt
chrono-dashboard/README.md
chrono-dashboard/src/App.css
chrono-dashboard/src/App.js
chrono-dashboard/src/App.test.js
chrono-dashboard/src/components/AdminSidebar.js
chrono-dashboard/src/components/TeacherSidebar.js
chrono-dashboard/src/context/AuthContext.js
chrono-dashboard/src/index.css
chrono-dashboard/src/index.js
chrono-dashboard/src/logo.svg
chrono-dashboard/src/pages/AdminPanel.js
chrono-dashboard/src/pages/ClassResults.js
chrono-dashboard/src/pages/Dashboard.js
chrono-dashboard/src/pages/LoginPage.js
chrono-dashboard/src/pages/ProfileSettings.js
chrono-dashboard/src/pages/QuestionManagement.js
chrono-dashboard/src/pages/RegisterPage.js
chrono-dashboard/src/reportWebVitals.js
chrono-dashboard/src/setupTests.js
chronoquest-api/.env
chronoquest-api/package.json
chronoquest-api/server.js
chronoquest-api/src/config/db.js
chronoquest-api/src/controllers/adminController.js
chronoquest-api/src/controllers/analyticsController.js
chronoquest-api/src/controllers/authController.js
chronoquest-api/src/controllers/questionController.js
chronoquest-api/src/controllers/studentController.js
chronoquest-api/src/middleware/adminMiddleware.js
chronoquest-api/src/middleware/authMiddleware.js
chronoquest-api/src/models/activityLogModel.js
chronoquest-api/src/models/feedbackModel.js
chronoquest-api/src/models/questionModel.js
chronoquest-api/src/models/scoreModel.js
chronoquest-api/src/models/studentModel.js
chronoquest-api/src/models/systemSettingsModel.js
chronoquest-api/src/models/teacherModel.js
chronoquest-api/src/routes/adminRoutes.js
chronoquest-api/src/routes/apiRoutes.js
chronoquest-api/src/routes/authRoutes.js
chronoquest-api/src/routes/questionRoutes.js
chronoquest-api/src/utils/generateCode.js
SYSTEM_DOCUMENTATION.md
```

# Files

## File: chrono-dashboard/.git/COMMIT_EDITMSG
````
Initialize project using Create React App
````

## File: chrono-dashboard/.git/config
````
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
````

## File: chrono-dashboard/.git/description
````
Unnamed repository; edit this file 'description' to name the repository.
````

## File: chrono-dashboard/.git/gk/config
````
[branch "master"]
	gk-last-accessed = 2026-04-10T10:29:41.121Z
	gk-last-modified = 2026-04-04T02:06:49.210Z
````

## File: chrono-dashboard/.git/HEAD
````
ref: refs/heads/master
````

## File: chrono-dashboard/.git/hooks/applypatch-msg.sample
````
#!/bin/sh
#
# An example hook script to check the commit log message taken by
# applypatch from an e-mail message.
#
# The hook should exit with non-zero status after issuing an
# appropriate message if it wants to stop the commit.  The hook is
# allowed to edit the commit message file.
#
# To enable this hook, rename this file to "applypatch-msg".

. git-sh-setup
commitmsg="$(git rev-parse --git-path hooks/commit-msg)"
test -x "$commitmsg" && exec "$commitmsg" ${1+"$@"}
:
````

## File: chrono-dashboard/.git/hooks/commit-msg.sample
````
#!/bin/sh
#
# An example hook script to check the commit log message.
# Called by "git commit" with one argument, the name of the file
# that has the commit message.  The hook should exit with non-zero
# status after issuing an appropriate message if it wants to stop the
# commit.  The hook is allowed to edit the commit message file.
#
# To enable this hook, rename this file to "commit-msg".

# Uncomment the below to add a Signed-off-by line to the message.
# Doing this in a hook is a bad idea in general, but the prepare-commit-msg
# hook is more suited to it.
#
# SOB=$(git var GIT_AUTHOR_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')
# grep -qs "^$SOB" "$1" || echo "$SOB" >> "$1"

# This example catches duplicate Signed-off-by lines.

test "" = "$(grep '^Signed-off-by: ' "$1" |
	 sort | uniq -c | sed -e '/^[ 	]*1[ 	]/d')" || {
	echo >&2 Duplicate Signed-off-by lines.
	exit 1
}
````

## File: chrono-dashboard/.git/hooks/fsmonitor-watchman.sample
````
#!/usr/bin/perl

use strict;
use warnings;
use IPC::Open2;

# An example hook script to integrate Watchman
# (https://facebook.github.io/watchman/) with git to speed up detecting
# new and modified files.
#
# The hook is passed a version (currently 2) and last update token
# formatted as a string and outputs to stdout a new update token and
# all files that have been modified since the update token. Paths must
# be relative to the root of the working tree and separated by a single NUL.
#
# To enable this hook, rename this file to "query-watchman" and set
# 'git config core.fsmonitor .git/hooks/query-watchman'
#
my ($version, $last_update_token) = @ARGV;

# Uncomment for debugging
# print STDERR "$0 $version $last_update_token\n";

# Check the hook interface version
if ($version ne 2) {
	die "Unsupported query-fsmonitor hook version '$version'.\n" .
	    "Falling back to scanning...\n";
}

my $git_work_tree = get_working_dir();

my $retry = 1;

my $json_pkg;
eval {
	require JSON::XS;
	$json_pkg = "JSON::XS";
	1;
} or do {
	require JSON::PP;
	$json_pkg = "JSON::PP";
};

launch_watchman();

sub launch_watchman {
	my $o = watchman_query();
	if (is_work_tree_watched($o)) {
		output_result($o->{clock}, @{$o->{files}});
	}
}

sub output_result {
	my ($clockid, @files) = @_;

	# Uncomment for debugging watchman output
	# open (my $fh, ">", ".git/watchman-output.out");
	# binmode $fh, ":utf8";
	# print $fh "$clockid\n@files\n";
	# close $fh;

	binmode STDOUT, ":utf8";
	print $clockid;
	print "\0";
	local $, = "\0";
	print @files;
}

sub watchman_clock {
	my $response = qx/watchman clock "$git_work_tree"/;
	die "Failed to get clock id on '$git_work_tree'.\n" .
		"Falling back to scanning...\n" if $? != 0;

	return $json_pkg->new->utf8->decode($response);
}

sub watchman_query {
	my $pid = open2(\*CHLD_OUT, \*CHLD_IN, 'watchman -j --no-pretty')
	or die "open2() failed: $!\n" .
	"Falling back to scanning...\n";

	# In the query expression below we're asking for names of files that
	# changed since $last_update_token but not from the .git folder.
	#
	# To accomplish this, we're using the "since" generator to use the
	# recency index to select candidate nodes and "fields" to limit the
	# output to file names only. Then we're using the "expression" term to
	# further constrain the results.
	my $last_update_line = "";
	if (substr($last_update_token, 0, 1) eq "c") {
		$last_update_token = "\"$last_update_token\"";
		$last_update_line = qq[\n"since": $last_update_token,];
	}
	my $query = <<"	END";
		["query", "$git_work_tree", {$last_update_line
			"fields": ["name"],
			"expression": ["not", ["dirname", ".git"]]
		}]
	END

	# Uncomment for debugging the watchman query
	# open (my $fh, ">", ".git/watchman-query.json");
	# print $fh $query;
	# close $fh;

	print CHLD_IN $query;
	close CHLD_IN;
	my $response = do {local $/; <CHLD_OUT>};

	# Uncomment for debugging the watch response
	# open ($fh, ">", ".git/watchman-response.json");
	# print $fh $response;
	# close $fh;

	die "Watchman: command returned no output.\n" .
	"Falling back to scanning...\n" if $response eq "";
	die "Watchman: command returned invalid output: $response\n" .
	"Falling back to scanning...\n" unless $response =~ /^\{/;

	return $json_pkg->new->utf8->decode($response);
}

sub is_work_tree_watched {
	my ($output) = @_;
	my $error = $output->{error};
	if ($retry > 0 and $error and $error =~ m/unable to resolve root .* directory (.*) is not watched/) {
		$retry--;
		my $response = qx/watchman watch "$git_work_tree"/;
		die "Failed to make watchman watch '$git_work_tree'.\n" .
		    "Falling back to scanning...\n" if $? != 0;
		$output = $json_pkg->new->utf8->decode($response);
		$error = $output->{error};
		die "Watchman: $error.\n" .
		"Falling back to scanning...\n" if $error;

		# Uncomment for debugging watchman output
		# open (my $fh, ">", ".git/watchman-output.out");
		# close $fh;

		# Watchman will always return all files on the first query so
		# return the fast "everything is dirty" flag to git and do the
		# Watchman query just to get it over with now so we won't pay
		# the cost in git to look up each individual file.
		my $o = watchman_clock();
		$error = $output->{error};

		die "Watchman: $error.\n" .
		"Falling back to scanning...\n" if $error;

		output_result($o->{clock}, ("/"));
		$last_update_token = $o->{clock};

		eval { launch_watchman() };
		return 0;
	}

	die "Watchman: $error.\n" .
	"Falling back to scanning...\n" if $error;

	return 1;
}

sub get_working_dir {
	my $working_dir;
	if ($^O =~ 'msys' || $^O =~ 'cygwin') {
		$working_dir = Win32::GetCwd();
		$working_dir =~ tr/\\/\//;
	} else {
		require Cwd;
		$working_dir = Cwd::cwd();
	}

	return $working_dir;
}
````

## File: chrono-dashboard/.git/hooks/post-update.sample
````
#!/bin/sh
#
# An example hook script to prepare a packed repository for use over
# dumb transports.
#
# To enable this hook, rename this file to "post-update".

exec git update-server-info
````

## File: chrono-dashboard/.git/hooks/pre-applypatch.sample
````
#!/bin/sh
#
# An example hook script to verify what is about to be committed
# by applypatch from an e-mail message.
#
# The hook should exit with non-zero status after issuing an
# appropriate message if it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-applypatch".

. git-sh-setup
precommit="$(git rev-parse --git-path hooks/pre-commit)"
test -x "$precommit" && exec "$precommit" ${1+"$@"}
:
````

## File: chrono-dashboard/.git/hooks/pre-commit.sample
````
#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-commit".

if git rev-parse --verify HEAD >/dev/null 2>&1
then
	against=HEAD
else
	# Initial commit: diff against an empty tree object
	against=$(git hash-object -t tree /dev/null)
fi

# If you want to allow non-ASCII filenames set this variable to true.
allownonascii=$(git config --type=bool hooks.allownonascii)

# Redirect output to stderr.
exec 1>&2

# Cross platform projects tend to avoid non-ASCII filenames; prevent
# them from being added to the repository. We exploit the fact that the
# printable range starts at the space character and ends with tilde.
if [ "$allownonascii" != "true" ] &&
	# Note that the use of brackets around a tr range is ok here, (it's
	# even required, for portability to Solaris 10's /usr/bin/tr), since
	# the square bracket bytes happen to fall in the designated range.
	test $(git diff-index --cached --name-only --diff-filter=A -z $against |
	  LC_ALL=C tr -d '[ -~]\0' | wc -c) != 0
then
	cat <<\EOF
Error: Attempt to add a non-ASCII file name.

This can cause problems if you want to work with people on other platforms.

To be portable it is advisable to rename the file.

If you know what you are doing you can disable this check using:

  git config hooks.allownonascii true
EOF
	exit 1
fi

# If there are whitespace errors, print the offending file names and fail.
exec git diff-index --check --cached $against --
````

## File: chrono-dashboard/.git/hooks/pre-merge-commit.sample
````
#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git merge" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message to
# stderr if it wants to stop the merge commit.
#
# To enable this hook, rename this file to "pre-merge-commit".

. git-sh-setup
test -x "$GIT_DIR/hooks/pre-commit" &&
        exec "$GIT_DIR/hooks/pre-commit"
:
````

## File: chrono-dashboard/.git/hooks/pre-push.sample
````
#!/bin/sh

# An example hook script to verify what is about to be pushed.  Called by "git
# push" after it has checked the remote status, but before anything has been
# pushed.  If this script exits with a non-zero status nothing will be pushed.
#
# This hook is called with the following parameters:
#
# $1 -- Name of the remote to which the push is being done
# $2 -- URL to which the push is being done
#
# If pushing without using a named remote those arguments will be equal.
#
# Information about the commits which are being pushed is supplied as lines to
# the standard input in the form:
#
#   <local ref> <local oid> <remote ref> <remote oid>
#
# This sample shows how to prevent push of commits where the log message starts
# with "WIP" (work in progress).

remote="$1"
url="$2"

zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')

while read local_ref local_oid remote_ref remote_oid
do
	if test "$local_oid" = "$zero"
	then
		# Handle delete
		:
	else
		if test "$remote_oid" = "$zero"
		then
			# New branch, examine all commits
			range="$local_oid"
		else
			# Update to existing branch, examine new commits
			range="$remote_oid..$local_oid"
		fi

		# Check for WIP commit
		commit=$(git rev-list -n 1 --grep '^WIP' "$range")
		if test -n "$commit"
		then
			echo >&2 "Found WIP commit in $local_ref, not pushing"
			exit 1
		fi
	fi
done

exit 0
````

## File: chrono-dashboard/.git/hooks/pre-rebase.sample
````
#!/bin/sh
#
# Copyright (c) 2006, 2008 Junio C Hamano
#
# The "pre-rebase" hook is run just before "git rebase" starts doing
# its job, and can prevent the command from running by exiting with
# non-zero status.
#
# The hook is called with the following parameters:
#
# $1 -- the upstream the series was forked from.
# $2 -- the branch being rebased (or empty when rebasing the current branch).
#
# This sample shows how to prevent topic branches that are already
# merged to 'next' branch from getting rebased, because allowing it
# would result in rebasing already published history.

publish=next
basebranch="$1"
if test "$#" = 2
then
	topic="refs/heads/$2"
else
	topic=`git symbolic-ref HEAD` ||
	exit 0 ;# we do not interrupt rebasing detached HEAD
fi

case "$topic" in
refs/heads/??/*)
	;;
*)
	exit 0 ;# we do not interrupt others.
	;;
esac

# Now we are dealing with a topic branch being rebased
# on top of master.  Is it OK to rebase it?

# Does the topic really exist?
git show-ref -q "$topic" || {
	echo >&2 "No such branch $topic"
	exit 1
}

# Is topic fully merged to master?
not_in_master=`git rev-list --pretty=oneline ^master "$topic"`
if test -z "$not_in_master"
then
	echo >&2 "$topic is fully merged to master; better remove it."
	exit 1 ;# we could allow it, but there is no point.
fi

# Is topic ever merged to next?  If so you should not be rebasing it.
only_next_1=`git rev-list ^master "^$topic" ${publish} | sort`
only_next_2=`git rev-list ^master           ${publish} | sort`
if test "$only_next_1" = "$only_next_2"
then
	not_in_topic=`git rev-list "^$topic" master`
	if test -z "$not_in_topic"
	then
		echo >&2 "$topic is already up to date with master"
		exit 1 ;# we could allow it, but there is no point.
	else
		exit 0
	fi
else
	not_in_next=`git rev-list --pretty=oneline ^${publish} "$topic"`
	/usr/bin/perl -e '
		my $topic = $ARGV[0];
		my $msg = "* $topic has commits already merged to public branch:\n";
		my (%not_in_next) = map {
			/^([0-9a-f]+) /;
			($1 => 1);
		} split(/\n/, $ARGV[1]);
		for my $elem (map {
				/^([0-9a-f]+) (.*)$/;
				[$1 => $2];
			} split(/\n/, $ARGV[2])) {
			if (!exists $not_in_next{$elem->[0]}) {
				if ($msg) {
					print STDERR $msg;
					undef $msg;
				}
				print STDERR " $elem->[1]\n";
			}
		}
	' "$topic" "$not_in_next" "$not_in_master"
	exit 1
fi

<<\DOC_END

This sample hook safeguards topic branches that have been
published from being rewound.

The workflow assumed here is:

 * Once a topic branch forks from "master", "master" is never
   merged into it again (either directly or indirectly).

 * Once a topic branch is fully cooked and merged into "master",
   it is deleted.  If you need to build on top of it to correct
   earlier mistakes, a new topic branch is created by forking at
   the tip of the "master".  This is not strictly necessary, but
   it makes it easier to keep your history simple.

 * Whenever you need to test or publish your changes to topic
   branches, merge them into "next" branch.

The script, being an example, hardcodes the publish branch name
to be "next", but it is trivial to make it configurable via
$GIT_DIR/config mechanism.

With this workflow, you would want to know:

(1) ... if a topic branch has ever been merged to "next".  Young
    topic branches can have stupid mistakes you would rather
    clean up before publishing, and things that have not been
    merged into other branches can be easily rebased without
    affecting other people.  But once it is published, you would
    not want to rewind it.

(2) ... if a topic branch has been fully merged to "master".
    Then you can delete it.  More importantly, you should not
    build on top of it -- other people may already want to
    change things related to the topic as patches against your
    "master", so if you need further changes, it is better to
    fork the topic (perhaps with the same name) afresh from the
    tip of "master".

Let's look at this example:

		   o---o---o---o---o---o---o---o---o---o "next"
		  /       /           /           /
		 /   a---a---b A     /           /
		/   /               /           /
	       /   /   c---c---c---c B         /
	      /   /   /             \         /
	     /   /   /   b---b C     \       /
	    /   /   /   /             \     /
    ---o---o---o---o---o---o---o---o---o---o---o "master"


A, B and C are topic branches.

 * A has one fix since it was merged up to "next".

 * B has finished.  It has been fully merged up to "master" and "next",
   and is ready to be deleted.

 * C has not merged to "next" at all.

We would want to allow C to be rebased, refuse A, and encourage
B to be deleted.

To compute (1):

	git rev-list ^master ^topic next
	git rev-list ^master        next

	if these match, topic has not merged in next at all.

To compute (2):

	git rev-list master..topic

	if this is empty, it is fully merged to "master".

DOC_END
````

## File: chrono-dashboard/.git/hooks/pre-receive.sample
````
#!/bin/sh
#
# An example hook script to make use of push options.
# The example simply echoes all push options that start with 'echoback='
# and rejects all pushes when the "reject" push option is used.
#
# To enable this hook, rename this file to "pre-receive".

if test -n "$GIT_PUSH_OPTION_COUNT"
then
	i=0
	while test "$i" -lt "$GIT_PUSH_OPTION_COUNT"
	do
		eval "value=\$GIT_PUSH_OPTION_$i"
		case "$value" in
		echoback=*)
			echo "echo from the pre-receive-hook: ${value#*=}" >&2
			;;
		reject)
			exit 1
		esac
		i=$((i + 1))
	done
fi
````

## File: chrono-dashboard/.git/hooks/prepare-commit-msg.sample
````
#!/bin/sh
#
# An example hook script to prepare the commit log message.
# Called by "git commit" with the name of the file that has the
# commit message, followed by the description of the commit
# message's source.  The hook's purpose is to edit the commit
# message file.  If the hook fails with a non-zero status,
# the commit is aborted.
#
# To enable this hook, rename this file to "prepare-commit-msg".

# This hook includes three examples. The first one removes the
# "# Please enter the commit message..." help message.
#
# The second includes the output of "git diff --name-status -r"
# into the message, just before the "git status" output.  It is
# commented because it doesn't cope with --amend or with squashed
# commits.
#
# The third example adds a Signed-off-by line to the message, that can
# still be edited.  This is rarely a good idea.

COMMIT_MSG_FILE=$1
COMMIT_SOURCE=$2
SHA1=$3

/usr/bin/perl -i.bak -ne 'print unless(m/^. Please enter the commit message/..m/^#$/)' "$COMMIT_MSG_FILE"

# case "$COMMIT_SOURCE,$SHA1" in
#  ,|template,)
#    /usr/bin/perl -i.bak -pe '
#       print "\n" . `git diff --cached --name-status -r`
# 	 if /^#/ && $first++ == 0' "$COMMIT_MSG_FILE" ;;
#  *) ;;
# esac

# SOB=$(git var GIT_COMMITTER_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')
# git interpret-trailers --in-place --trailer "$SOB" "$COMMIT_MSG_FILE"
# if test -z "$COMMIT_SOURCE"
# then
#   /usr/bin/perl -i.bak -pe 'print "\n" if !$first_line++' "$COMMIT_MSG_FILE"
# fi
````

## File: chrono-dashboard/.git/hooks/push-to-checkout.sample
````
#!/bin/sh

# An example hook script to update a checked-out tree on a git push.
#
# This hook is invoked by git-receive-pack(1) when it reacts to git
# push and updates reference(s) in its repository, and when the push
# tries to update the branch that is currently checked out and the
# receive.denyCurrentBranch configuration variable is set to
# updateInstead.
#
# By default, such a push is refused if the working tree and the index
# of the remote repository has any difference from the currently
# checked out commit; when both the working tree and the index match
# the current commit, they are updated to match the newly pushed tip
# of the branch. This hook is to be used to override the default
# behaviour; however the code below reimplements the default behaviour
# as a starting point for convenient modification.
#
# The hook receives the commit with which the tip of the current
# branch is going to be updated:
commit=$1

# It can exit with a non-zero status to refuse the push (when it does
# so, it must not modify the index or the working tree).
die () {
	echo >&2 "$*"
	exit 1
}

# Or it can make any necessary changes to the working tree and to the
# index to bring them to the desired state when the tip of the current
# branch is updated to the new commit, and exit with a zero status.
#
# For example, the hook can simply run git read-tree -u -m HEAD "$1"
# in order to emulate git fetch that is run in the reverse direction
# with git push, as the two-tree form of git read-tree -u -m is
# essentially the same as git switch or git checkout that switches
# branches while keeping the local changes in the working tree that do
# not interfere with the difference between the branches.

# The below is a more-or-less exact translation to shell of the C code
# for the default behaviour for git's push-to-checkout hook defined in
# the push_to_deploy() function in builtin/receive-pack.c.
#
# Note that the hook will be executed from the repository directory,
# not from the working tree, so if you want to perform operations on
# the working tree, you will have to adapt your code accordingly, e.g.
# by adding "cd .." or using relative paths.

if ! git update-index -q --ignore-submodules --refresh
then
	die "Up-to-date check failed"
fi

if ! git diff-files --quiet --ignore-submodules --
then
	die "Working directory has unstaged changes"
fi

# This is a rough translation of:
#
#   head_has_history() ? "HEAD" : EMPTY_TREE_SHA1_HEX
if git cat-file -e HEAD 2>/dev/null
then
	head=HEAD
else
	head=$(git hash-object -t tree --stdin </dev/null)
fi

if ! git diff-index --quiet --cached --ignore-submodules $head --
then
	die "Working directory has staged changes"
fi

if ! git read-tree -u -m "$commit"
then
	die "Could not update working tree to new HEAD"
fi
````

## File: chrono-dashboard/.git/hooks/sendemail-validate.sample
````
#!/bin/sh

# An example hook script to validate a patch (and/or patch series) before
# sending it via email.
#
# The hook should exit with non-zero status after issuing an appropriate
# message if it wants to prevent the email(s) from being sent.
#
# To enable this hook, rename this file to "sendemail-validate".
#
# By default, it will only check that the patch(es) can be applied on top of
# the default upstream branch without conflicts in a secondary worktree. After
# validation (successful or not) of the last patch of a series, the worktree
# will be deleted.
#
# The following config variables can be set to change the default remote and
# remote ref that are used to apply the patches against:
#
#   sendemail.validateRemote (default: origin)
#   sendemail.validateRemoteRef (default: HEAD)
#
# Replace the TODO placeholders with appropriate checks according to your
# needs.

validate_cover_letter () {
	file="$1"
	# TODO: Replace with appropriate checks (e.g. spell checking).
	true
}

validate_patch () {
	file="$1"
	# Ensure that the patch applies without conflicts.
	git am -3 "$file" || return
	# TODO: Replace with appropriate checks for this patch
	# (e.g. checkpatch.pl).
	true
}

validate_series () {
	# TODO: Replace with appropriate checks for the whole series
	# (e.g. quick build, coding style checks, etc.).
	true
}

# main -------------------------------------------------------------------------

if test "$GIT_SENDEMAIL_FILE_COUNTER" = 1
then
	remote=$(git config --default origin --get sendemail.validateRemote) &&
	ref=$(git config --default HEAD --get sendemail.validateRemoteRef) &&
	worktree=$(mktemp --tmpdir -d sendemail-validate.XXXXXXX) &&
	git worktree add -fd --checkout "$worktree" "refs/remotes/$remote/$ref" &&
	git config --replace-all sendemail.validateWorktree "$worktree"
else
	worktree=$(git config --get sendemail.validateWorktree)
fi || {
	echo "sendemail-validate: error: failed to prepare worktree" >&2
	exit 1
}

unset GIT_DIR GIT_WORK_TREE
cd "$worktree" &&

if grep -q "^diff --git " "$1"
then
	validate_patch "$1"
else
	validate_cover_letter "$1"
fi &&

if test "$GIT_SENDEMAIL_FILE_COUNTER" = "$GIT_SENDEMAIL_FILE_TOTAL"
then
	git config --unset-all sendemail.validateWorktree &&
	trap 'git worktree remove -ff "$worktree"' EXIT &&
	validate_series
fi
````

## File: chrono-dashboard/.git/hooks/update.sample
````
#!/bin/sh
#
# An example hook script to block unannotated tags from entering.
# Called by "git receive-pack" with arguments: refname sha1-old sha1-new
#
# To enable this hook, rename this file to "update".
#
# Config
# ------
# hooks.allowunannotated
#   This boolean sets whether unannotated tags will be allowed into the
#   repository.  By default they won't be.
# hooks.allowdeletetag
#   This boolean sets whether deleting tags will be allowed in the
#   repository.  By default they won't be.
# hooks.allowmodifytag
#   This boolean sets whether a tag may be modified after creation. By default
#   it won't be.
# hooks.allowdeletebranch
#   This boolean sets whether deleting branches will be allowed in the
#   repository.  By default they won't be.
# hooks.denycreatebranch
#   This boolean sets whether remotely creating branches will be denied
#   in the repository.  By default this is allowed.
#

# --- Command line
refname="$1"
oldrev="$2"
newrev="$3"

# --- Safety check
if [ -z "$GIT_DIR" ]; then
	echo "Don't run this script from the command line." >&2
	echo " (if you want, you could supply GIT_DIR then run" >&2
	echo "  $0 <ref> <oldrev> <newrev>)" >&2
	exit 1
fi

if [ -z "$refname" -o -z "$oldrev" -o -z "$newrev" ]; then
	echo "usage: $0 <ref> <oldrev> <newrev>" >&2
	exit 1
fi

# --- Config
allowunannotated=$(git config --type=bool hooks.allowunannotated)
allowdeletebranch=$(git config --type=bool hooks.allowdeletebranch)
denycreatebranch=$(git config --type=bool hooks.denycreatebranch)
allowdeletetag=$(git config --type=bool hooks.allowdeletetag)
allowmodifytag=$(git config --type=bool hooks.allowmodifytag)

# check for no description
projectdesc=$(sed -e '1q' "$GIT_DIR/description")
case "$projectdesc" in
"Unnamed repository"* | "")
	echo "*** Project description file hasn't been set" >&2
	exit 1
	;;
esac

# --- Check types
# if $newrev is 0000...0000, it's a commit to delete a ref.
zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')
if [ "$newrev" = "$zero" ]; then
	newrev_type=delete
else
	newrev_type=$(git cat-file -t $newrev)
fi

case "$refname","$newrev_type" in
	refs/tags/*,commit)
		# un-annotated tag
		short_refname=${refname##refs/tags/}
		if [ "$allowunannotated" != "true" ]; then
			echo "*** The un-annotated tag, $short_refname, is not allowed in this repository" >&2
			echo "*** Use 'git tag [ -a | -s ]' for tags you want to propagate." >&2
			exit 1
		fi
		;;
	refs/tags/*,delete)
		# delete tag
		if [ "$allowdeletetag" != "true" ]; then
			echo "*** Deleting a tag is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/tags/*,tag)
		# annotated tag
		if [ "$allowmodifytag" != "true" ] && git rev-parse $refname > /dev/null 2>&1
		then
			echo "*** Tag '$refname' already exists." >&2
			echo "*** Modifying a tag is not allowed in this repository." >&2
			exit 1
		fi
		;;
	refs/heads/*,commit)
		# branch
		if [ "$oldrev" = "$zero" -a "$denycreatebranch" = "true" ]; then
			echo "*** Creating a branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/heads/*,delete)
		# delete branch
		if [ "$allowdeletebranch" != "true" ]; then
			echo "*** Deleting a branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/remotes/*,commit)
		# tracking branch
		;;
	refs/remotes/*,delete)
		# delete tracking branch
		if [ "$allowdeletebranch" != "true" ]; then
			echo "*** Deleting a tracking branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	*)
		# Anything else (is there anything else?)
		echo "*** Update hook: unknown type of update to ref $refname of type $newrev_type" >&2
		exit 1
		;;
esac

# --- Finished
exit 0
````

## File: chrono-dashboard/.git/info/exclude
````
# git ls-files --others --exclude-from=.git/info/exclude
# Lines that start with '#' are comments.
# For a project mostly in C, the following would be a good set of
# exclude patterns (uncomment them if you want to use them):
# *.[oa]
# *~
````

## File: chrono-dashboard/.git/logs/HEAD
````
0000000000000000000000000000000000000000 f7251c5082bdb322a0be6d37f6606b0c030b33c7 revillozajohnharold-debug <revilloza.johnharold@marsu.edu.ph> 1775268256 +0800	commit (initial): Initialize project using Create React App
````

## File: chrono-dashboard/.git/logs/refs/heads/master
````
0000000000000000000000000000000000000000 f7251c5082bdb322a0be6d37f6606b0c030b33c7 revillozajohnharold-debug <revilloza.johnharold@marsu.edu.ph> 1775268256 +0800	commit (initial): Initialize project using Create React App
````

## File: chrono-dashboard/.git/refs/heads/master
````
f7251c5082bdb322a0be6d37f6606b0c030b33c7
````

## File: chrono-dashboard/.gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
````

## File: chrono-dashboard/package.json
````json
{
  "name": "chrono-dashboard",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/dom": "^10.4.1",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.2",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.14.0",
    "lucide-react": "^1.7.0",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-hot-toast": "^2.6.0",
    "react-router-dom": "^7.14.0",
    "react-scripts": "5.0.1",
    "recharts": "^3.8.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "set PORT=3001 && react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
````

## File: chrono-dashboard/postcss.config.js
````javascript
module.exports = {
  plugins: {
    autoprefixer: {},
  },
}
````

## File: chrono-dashboard/public/index.html
````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
````

## File: chrono-dashboard/public/manifest.json
````json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
````

## File: chrono-dashboard/public/robots.txt
````
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:
````

## File: chrono-dashboard/README.md
````markdown
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
````

## File: chrono-dashboard/src/App.css
````css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Archive Feature Styles */
.archived-section-btn {
  opacity: 0.7;
  background-color: rgba(71, 85, 105, 0.05);
}

.archived-section-btn:hover {
  opacity: 0.9;
}
````

## File: chrono-dashboard/src/App.js
````javascript
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
````

## File: chrono-dashboard/src/App.test.js
````javascript
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
````

## File: chrono-dashboard/src/components/AdminSidebar.js
````javascript
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LayoutDashboard, Users, LogOut, MessageSquare, Settings, ArrowLeft, BookOpen } from 'lucide-react';

const AdminSidebar = ({ activeTab, setActiveTab }) => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const menuItems = [
        { id: 'dashboard', name: 'Dashboard', icon: <LayoutDashboard size={16} /> },
        { id: 'users', name: 'Users Management', icon: <Users size={16} /> },
        { id: 'questions', name: 'Questions', icon: <BookOpen size={16} /> },
        { id: 'feedback', name: 'Feedback', icon: <MessageSquare size={16} /> },
        { id: 'settings', name: 'Settings', icon: <Settings size={16} /> },
    ];

    const navBtn = (id) =>
        `sidebar-btn${activeTab === id ? ' active' : ''}`;

    return (
        <aside className="sidebar">
            <button onClick={() => navigate('/dashboard')} className="sidebar-back-btn">
                <ArrowLeft size={14} />
                <span>Back</span>
            </button>

            <h1 className="sidebar-title">Admin</h1>

            <nav className="sidebar-nav">
                <div>
                    <p className="sidebar-section-label">Main</p>
                    <div className="sidebar-nav-group">
                        {menuItems.slice(0, 2).map(item => (
                            <button key={item.id} onClick={() => setActiveTab(item.id)} className={navBtn(item.id)}>
                                {item.icon} {item.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="sidebar-section-label">Content</p>
                    <div className="sidebar-nav-group">
                        {menuItems.slice(2, 3).map(item => (
                            <button key={item.id} onClick={() => setActiveTab(item.id)} className={navBtn(item.id)}>
                                {item.icon} {item.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="sidebar-section-label">Communication</p>
                    <div className="sidebar-nav-group">
                        {menuItems.slice(3, 4).map(item => (
                            <button key={item.id} onClick={() => setActiveTab(item.id)} className={navBtn(item.id)}>
                                {item.icon} {item.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="sidebar-section-label">System</p>
                    <div className="sidebar-nav-group">
                        {menuItems.slice(4).map(item => (
                            <button key={item.id} onClick={() => setActiveTab(item.id)} className={navBtn(item.id)}>
                                {item.icon} {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            <button onClick={logout} className="sidebar-logout-btn">
                <LogOut size={16} /> Sign Out
            </button>
        </aside>
    );
};

export default AdminSidebar;
````

## File: chrono-dashboard/src/components/TeacherSidebar.js
````javascript
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LayoutDashboard, BarChart3, LogOut, Settings, MessageSquare, Shield } from 'lucide-react';

const TeacherSidebar = ({ activeTab, setActiveTab }) => {
    const { teacher } = useContext(AuthContext);
    const navigate = useNavigate();

    const navBtn = (id) =>
        `sidebar-btn${activeTab === id ? ' active' : ''}`;

    return (
        <aside className="sidebar">
            <h1 className="sidebar-title">Instructor</h1>

            <nav className="sidebar-nav">
                <div>
                    <p className="sidebar-section-label">Main</p>
                    <div className="sidebar-nav-group">
                        <button onClick={() => setActiveTab('overview')} className={navBtn('overview')}>
                            <LayoutDashboard size={16} /> Overview
                        </button>
                        <button onClick={() => setActiveTab('results')} className={navBtn('results')}>
                            <BarChart3 size={16} /> Class Results
                        </button>
                    </div>
                </div>

                <div>
                    <p className="sidebar-section-label">Account</p>
                    <div className="sidebar-nav-group">
                        <button onClick={() => setActiveTab('settings')} className={navBtn('settings')}>
                            <Settings size={16} /> Profile Settings
                        </button>
                        <button onClick={() => setActiveTab('feedback')} className={navBtn('feedback')}>
                            <MessageSquare size={16} /> Send Feedback
                        </button>
                    </div>
                </div>

                {teacher?.role === 'admin' && (
                    <div>
                        <p className="sidebar-section-label">Administration</p>
                        <div className="sidebar-nav-group">
                            <button onClick={() => navigate('/admin')} className="sidebar-btn-admin">
                                <Shield size={16} /> Admin Portal
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            <button
                onClick={() => { localStorage.clear(); window.location.href = '/login'; }}
                className="sidebar-logout-btn"
            >
                <LogOut size={16} /> Sign Out
            </button>
        </aside>
    );
};

export default TeacherSidebar;
````

## File: chrono-dashboard/src/context/AuthContext.js
````javascript
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [teacher, setTeacher] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedTeacher = localStorage.getItem('teacherData');
        const token = localStorage.getItem('teacherToken');

        if (savedTeacher && savedTeacher !== "undefined" && token) {
            try {
                setTeacher(JSON.parse(savedTeacher));
            } catch (e) {
                console.error("Failed to parse teacher data", e);
                localStorage.removeItem('teacherData');
            }
        }

        setLoading(false);
    }, []);

    const login = (data, token) => {
        if (!data || !token) return;
        localStorage.setItem('teacherToken', token);
        localStorage.setItem('teacherData', JSON.stringify(data));
        setTeacher(data);
    };

    const logout = () => {
        localStorage.removeItem('teacherToken');
        localStorage.removeItem('teacherData');
        setTeacher(null);
        window.location.href = '/';
    };

    return (
        <AuthContext.Provider value={{ teacher, setTeacher, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
````

## File: chrono-dashboard/src/index.css
````css
/* ========================================
   CHRONOQUEST GLOBAL STYLES
   Replaces Tailwind CSS
   ======================================== */

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,
body,
#root {
    height: 100%;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f8fafc;
    color: #0f172a;
    -webkit-font-smoothing: antialiased;
}

/* ========================================
   LAYOUT
   ======================================== */

.page {
    min-height: 100vh;
    background-color: #f8fafc;
    color: #0f172a;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.page-centered {
    min-height: 100vh;
    background-color: #f8fafc;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
}

.main-content {
    margin-left: 256px;
}

.main-padded {
    margin-left: 256px;
    padding: 48px;
}

.content-area {
    padding: 48px;
}

/* ========================================
   SIDEBAR
   ======================================== */

.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 256px;
    background-color: #ffffff;
    border-right: 1px solid #e2e8f0;
    display: flex;
    flex-direction: column;
    z-index: 40;
    padding: 24px;
}

.sidebar-title {
    font-size: 1.5rem;
    font-weight: 900;
    color: #0f172a;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    margin-bottom: 40px;
}

.sidebar-back-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 32px;
    color: #94a3b8;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
}

.sidebar-back-btn:hover {
    color: #475569;
}

.sidebar-nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.sidebar-section-label {
    font-size: 0.5625rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #94a3b8;
    margin-bottom: 12px;
    padding: 0 8px;
}

.sidebar-nav-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.sidebar-btn {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 16px;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: background-color 0.2s, color 0.2s;
    background: none;
    border: none;
    cursor: pointer;
    color: #94a3b8;
}

.sidebar-btn:hover {
    color: #475569;
}

.sidebar-btn.active {
    background-color: #0f172a;
    color: #ffffff;
}

.sidebar-btn-admin {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 16px;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #059669;
    background: none;
    border: 1px solid #a7f3d0;
    cursor: pointer;
    transition: background-color 0.2s;
}

.sidebar-btn-admin:hover {
    background-color: #ecfdf5;
}

.sidebar-logout-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    color: #cbd5e1;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: color 0.2s, background-color 0.2s;
    border-radius: 16px;
    border-top: 1px solid #e2e8f0;
    margin-top: auto;
    padding-top: 24px;
    background: none;
    border: none;
    cursor: pointer;
    border-top: 1px solid #e2e8f0;
}

.sidebar-logout-btn:hover {
    color: #64748b;
    background-color: #f8fafc;
}

/* ========================================
   AUTH PAGES (Login / Register)
   ======================================== */

.auth-wrapper {
    width: 100%;
    max-width: 420px;
}

.auth-brand {
    text-align: center;
    margin-bottom: 64px;
}

.auth-brand-title {
    font-size: 3rem;
    font-weight: 900;
    color: #0f172a;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    margin-bottom: 8px;
}

.auth-brand-subtitle {
    color: #94a3b8;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
}

.auth-card {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 40px;
}

.auth-card-title {
    font-size: 1.5rem;
    font-weight: 900;
    color: #0f172a;
    margin-bottom: 40px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: -0.05em;
}

.auth-footer {
    margin-top: 40px;
    padding-top: 40px;
    border-top: 1px solid #f1f5f9;
    text-align: center;
}

.auth-footer-text {
    color: #94a3b8;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.auth-footer-link {
    color: #0f172a;
    font-weight: 900;
    text-decoration: none;
}

.auth-footer-link:hover {
    color: #334155;
}

.auth-security-note {
    margin-top: 40px;
    text-align: center;
}

.auth-security-text {
    font-size: 0.5625rem;
    font-weight: 700;
    color: #cbd5e1;
    text-transform: uppercase;
    letter-spacing: 0.2em;
}

/* ========================================
   FORMS
   ======================================== */

.form-stack {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-label {
    display: block;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #94a3b8;
    margin-bottom: 16px;
}

.form-label-sm {
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #475569;
    margin-bottom: 8px;
}

.form-input {
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 16px 24px;
    font-weight: 600;
    color: #0f172a;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s;
}

.form-input:focus {
    border-color: #94a3b8;
}

.form-input::placeholder {
    color: #cbd5e1;
}

.form-input-sm {
    width: 100%;
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 8px 16px;
    font-weight: 600;
    color: #334155;
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.2s;
}

.form-input-sm:focus {
    border-color: #94a3b8;
}

.form-input-sm::placeholder {
    color: #94a3b8;
}

.form-input-number {
    padding: 8px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.875rem;
    outline: none;
    width: 96px;
}

.form-input-number:focus {
    border-color: #94a3b8;
}

.form-input-number:disabled {
    background-color: #f1f5f9;
    cursor: not-allowed;
}

.form-select {
    width: 100%;
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 12px 16px;
    font-weight: 600;
    color: #334155;
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.2s;
}

.form-select:focus {
    border-color: #94a3b8;
}

.form-select-lg {
    width: 100%;
    padding: 12px 20px;
    border: 2px solid #f1f5f9;
    border-radius: 12px;
    font-weight: 600;
    color: #334155;
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.2s;
    background-color: #ffffff;
}

.form-select-lg:focus {
    border-color: #4f46e5;
}

.form-textarea {
    width: 100%;
    padding: 12px 20px;
    border: 2px solid #f1f5f9;
    border-radius: 12px;
    font-weight: 600;
    color: #334155;
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.2s;
    resize: none;
    background-color: #ffffff;
}

.form-textarea:focus {
    border-color: #4f46e5;
}

.form-textarea::placeholder {
    color: #cbd5e1;
}

.form-textarea-sm {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    font-weight: 600;
    color: #1e293b;
    font-size: 0.875rem;
    background-color: #f8fafc;
    outline: none;
    resize: none;
}

.form-textarea-sm:focus {
    box-shadow: 0 0 0 2px #cbd5e1;
}

.input-password-wrapper {
    position: relative;
}

.input-password-wrapper .form-input {
    padding-right: 48px;
}

.input-password-wrapper .form-input-sm {
    padding-right: 48px;
}

.password-toggle {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #94a3b8;
    transition: color 0.2s;
    display: flex;
    align-items: center;
}

.password-toggle:hover {
    color: #475569;
}

/* ========================================
   BUTTONS
   ======================================== */

.btn-primary {
    width: 100%;
    background-color: #0f172a;
    color: #ffffff;
    font-weight: 900;
    padding: 16px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: background-color 0.2s;
    margin-top: 32px;
}

.btn-primary:hover {
    background-color: #1e293b;
}

.btn-primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.btn-dark {
    background-color: #0f172a;
    color: #ffffff;
    font-weight: 900;
    padding: 12px 24px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: background-color 0.2s;
}

.btn-dark:hover {
    background-color: #1e293b;
}

.btn-dark:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.btn-indigo {
    background-color: #4f46e5;
    color: #ffffff;
    font-weight: 900;
    padding: 16px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: background-color 0.2s, transform 0.1s;
    box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.3);
}

.btn-indigo:hover {
    background-color: #4338ca;
}

.btn-indigo:active {
    transform: scale(0.97);
}

.btn-indigo:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-indigo-full {
    width: 100%;
    background-color: #4f46e5;
    color: #ffffff;
    font-weight: 900;
    padding: 16px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: background-color 0.2s, transform 0.1s;
    box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.3);
}

.btn-indigo-full:hover {
    background-color: #4338ca;
}

.btn-indigo-full:active {
    transform: scale(0.97);
}

.btn-indigo-full:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-emerald {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #059669;
    color: #ffffff;
    font-weight: 900;
    padding: 10px 20px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: background-color 0.2s;
}

.btn-emerald:hover {
    background-color: #047857;
}

.btn-red {
    background-color: #dc2626;
    color: #ffffff;
    font-weight: 900;
    padding: 12px 40px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
}

.btn-red:hover {
    background-color: #b91c1c;
}

.btn-red:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.btn-ghost {
    background: none;
    border: none;
    color: #94a3b8;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: color 0.2s;
    padding: 0;
}

.btn-ghost:hover {
    color: #475569;
}

.btn-outline {
    background: none;
    border: 1px solid #e2e8f0;
    color: #475569;
    font-weight: 900;
    padding: 12px 24px;
    border-radius: 16px;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: background-color 0.2s;
}

.btn-outline:hover {
    background-color: #f8fafc;
}

.btn-outline-dark {
    border: 1px solid #334155;
    background: none;
    padding: 12px 24px;
    border-radius: 16px;
    font-weight: 700;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    color: #334155;
    transition: background-color 0.2s;
}

.btn-outline-dark:hover {
    background-color: #f1f5f9;
}

.btn-outline-dark:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-save {
    background-color: #0f172a;
    color: #ffffff;
    font-weight: 900;
    padding: 12px 40px;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
}

.btn-save:hover {
    background-color: #1e293b;
}

.btn-save:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.btn-icon {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s, color 0.2s;
}

.btn-icon-blue {
    color: #2563eb;
}

.btn-icon-blue:hover {
    color: #1d4ed8;
    background-color: #eff6ff;
}

.btn-icon-yellow {
    color: #ca8a04;
}

.btn-icon-yellow:hover {
    color: #a16207;
    background-color: #fefce8;
}

.btn-icon-red {
    color: #dc2626;
}

.btn-icon-red:hover {
    color: #b91c1c;
    background-color: #fef2f2;
}

.btn-icon-slate {
    color: #94a3b8;
}

.btn-icon-slate:hover {
    color: #334155;
    background-color: #f1f5f9;
}

/* ========================================
   CARDS
   ======================================== */

.card {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 32px;
}

.card-lg {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 40px;
}

.stat-card {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 32px;
}

.stat-card-label {
    font-size: 0.625rem;
    font-weight: 700;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 12px;
}

.stat-card-value {
    font-size: 2.5rem;
    font-weight: 900;
    color: #0f172a;
}

.stat-card-value-accent {
    font-size: 2.5rem;
    font-weight: 900;
}

.stat-card-icon-row {
    display: flex;
    align-items: flex-end;
    gap: 16px;
}

/* ========================================
   PAGE HEADERS
   ======================================== */

.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;
}

.page-title {
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: -0.05em;
    color: #0f172a;
    text-transform: uppercase;
}

.page-subtitle {
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #94a3b8;
    margin-top: 8px;
}

.section-title {
    font-size: 1.25rem;
    font-weight: 900;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: -0.02em;
}

.section-subtitle {
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #94a3b8;
    margin-top: 4px;
}

/* ========================================
   GRID LAYOUTS
   ======================================== */

.grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

.grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

@media (max-width: 768px) {

    .grid-3,
    .grid-4 {
        grid-template-columns: 1fr;
    }

    .grid-2 {
        grid-template-columns: 1fr;
    }
}

/* ========================================
   TABLES
   ======================================== */

.table-wrapper {
    overflow-x: auto;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
}

.table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

.table thead {
    background-color: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
}

.table th {
    padding: 16px 32px;
    font-weight: 700;
    font-size: 0.625rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.15em;
}

.table th-right {
    padding: 16px 32px;
    font-weight: 700;
    font-size: 0.625rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    text-align: right;
}

.table tbody tr {
    border-bottom: 1px solid #f1f5f9;
    transition: background-color 0.15s;
}

.table tbody tr:hover {
    background-color: #f8fafc;
}

.table td {
    padding: 20px 32px;
}

.table td-right {
    padding: 20px 32px;
    text-align: right;
}

.table-cell-name {
    font-weight: 700;
    color: #0f172a;
}

.table-cell-sub {
    font-size: 0.875rem;
    color: #475569;
}

.table-cell-mono {
    font-family: monospace;
    font-size: 0.875rem;
    font-weight: 700;
    color: #475569;
}

.table-cell-meta {
    font-size: 0.75rem;
    color: #64748b;
    font-weight: 600;
}

.table-actions {
    display: flex;
    gap: 8px;
    align-items: center;
}

/* ========================================
   BADGES / PILLS
   ======================================== */

.badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 700;
}

.badge-active {
    background-color: #d1fae5;
    color: #065f46;
}

.badge-inactive {
    background-color: #fee2e2;
    color: #991b1b;
}

.badge-amber {
    background-color: #fef3c7;
    color: #92400e;
}

.badge-blue {
    background-color: #dbeafe;
    color: #1e40af;
}

.badge-red {
    background-color: #fee2e2;
    color: #991b1b;
}

.badge-emerald {
    background-color: #d1fae5;
    color: #065f46;
}

.badge-open {
    background-color: #fef3c7;
    color: #92400e;
}

.badge-resolved {
    background-color: #d1fae5;
    color: #065f46;
}

/* ========================================
   ALERTS
   ======================================== */

.alert-error {
    background-color: #fef2f2;
    border: 1px solid #fecaca;
    color: #b91c1c;
    padding: 12px 16px;
    border-radius: 16px;
    font-size: 0.875rem;
    font-weight: 600;
}

.alert-success {
    background-color: #f0fdf4;
    border: 1px solid #bbf7d0;
    color: #15803d;
    padding: 12px 16px;
    border-radius: 16px;
    font-size: 0.875rem;
    font-weight: 600;
}

.alert-info {
    background-color: #eff6ff;
    border: 1px solid #bfdbfe;
    padding: 24px;
    border-radius: 16px;
    color: #475569;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.6;
}

/* ========================================
   MODALS
   ======================================== */

.modal-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(4px);
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
}

.modal {
    background-color: #ffffff;
    border-radius: 40px;
    padding: 40px;
    width: 100%;
    max-width: 448px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.modal-lg {
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 640px;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-md {
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 32px;
    width: 100%;
    max-width: 448px;
}

.modal-title {
    font-size: 1.5rem;
    font-weight: 900;
    color: #1e293b;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
}

.modal-subtitle {
    color: #64748b;
    font-size: 0.875rem;
    font-weight: 700;
    margin-bottom: 24px;
}

.modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 32px;
    border-bottom: 1px solid #f1f5f9;
}

.modal-body {
    padding: 24px 32px;
}

.modal-input {
    width: 100%;
    padding: 16px 20px;
    border-radius: 12px;
    border: 2px solid #f1f5f9;
    margin-bottom: 32px;
    outline: none;
    font-weight: 900;
    color: #334155;
    font-size: 1rem;
    transition: border-color 0.2s;
}

.modal-input:focus {
    border-color: #4f46e5;
}

.modal-input::placeholder {
    color: #cbd5e1;
}

.modal-actions {
    display: flex;
    gap: 16px;
}

/* ========================================
   SECTION SELECTOR (Dashboard)
   ======================================== */

.section-panel {
    background-color: #ffffff;
    padding: 16px;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
}

.section-panel-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
}

.section-panel-label {
    font-size: 0.75rem;
    font-weight: 700;
    color: #475569;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.section-panel-count {
    font-size: 0.75rem;
    font-weight: 700;
    color: #94a3b8;
}

.section-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.section-chip {
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: #f8fafc;
    border-radius: 16px;
    padding: 4px;
    border: 1px solid #e2e8f0;
    transition: border-color 0.2s;
}

.section-chip:hover {
    border-color: #cbd5e1;
}

.section-chip-btn {
    padding: 8px 16px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: none;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
    color: #64748b;
}

.section-chip-btn:hover {
    color: #334155;
}

.section-chip-btn.active {
    background-color: #f59e0b;
    color: #ffffff;
}

.section-chip-archived .section-chip-btn {
    color: #94a3b8;
}

.section-chip-icon-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    color: #cbd5e1;
    transition: color 0.2s, opacity 0.2s;
    opacity: 0;
    display: flex;
}

.section-chip:hover .section-chip-icon-btn {
    opacity: 1;
}

.section-chip-icon-btn:hover {
    color: #475569;
}

.section-chip-icon-btn-danger:hover {
    color: #ef4444;
}

.archived-toggle-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    cursor: pointer;
    margin-bottom: 12px;
}

.archived-toggle-btn:hover {
    opacity: 0.7;
}

.archived-toggle-label {
    font-size: 0.75rem;
    font-weight: 700;
    color: #475569;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    gap: 8px;
}

.archive-chevron {
    color: #94a3b8;
    transition: transform 0.2s;
}

.archive-chevron.open {
    transform: rotate(180deg);
}

/* ========================================
   ACCESS CODE DISPLAY
   ======================================== */

.access-code-card {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 16px;
    border: 1px solid #fde68a;
}

.access-code-label {
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #94a3b8;
    margin-bottom: 16px;
}

.access-code-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.access-code-text {
    font-size: 3rem;
    font-family: monospace;
    font-weight: 900;
    color: #0f172a;
    letter-spacing: 0.1em;
}

.access-code-copy-btn {
    width: 48px;
    height: 48px;
    background-color: #ffffff;
    border: 1px solid #fcd34d;
    border-radius: 16px;
    color: #0f172a;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
    font-weight: 700;
}

.access-code-copy-btn:hover {
    background-color: #fffbeb;
}

/* ========================================
   EMPTY STATE
   ======================================== */

.empty-state {
    padding: 96px 0;
    text-align: center;
}

.empty-state-icon {
    color: #e2e8f0;
    margin: 0 auto 16px;
}

.empty-state-text {
    color: #94a3b8;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.875rem;
}

.empty-state-sub {
    color: #cbd5e1;
    font-size: 0.75rem;
    margin-top: 4px;
}

/* ========================================
   CLASS RESULTS / LEADERBOARD
   ======================================== */

.view-toggle {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 4px;
    gap: 4px;
}

.view-toggle-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: none;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
    color: #94a3b8;
}

.view-toggle-btn:hover {
    color: #475569;
}

.view-toggle-btn.active {
    background-color: #0f172a;
    color: #ffffff;
}

.rank-row-gold {
    background-color: #fefce8;
    border-color: #fde68a;
}

.rank-row-silver {
    background-color: #f8fafc;
    border-color: #e2e8f0;
}

.rank-row-bronze {
    background-color: #fff7ed;
    border-color: #fed7aa;
}

.rank-row-default {
    background-color: #ffffff;
    border-color: #f1f5f9;
}

.rank-badge {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 900;
}

.rank-badge-gold {
    background-color: #fef3c7;
    color: #92400e;
}

.rank-badge-silver {
    background-color: #e2e8f0;
    color: #334155;
}

.rank-badge-bronze {
    background-color: #fed7aa;
    color: #9a3412;
}

.rank-badge-default {
    background-color: #f1f5f9;
    color: #64748b;
}

/* ========================================
   QUESTION MANAGEMENT
   ======================================== */

.filter-bar {
    background-color: #ffffff;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    padding: 16px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.difficulty-badge-easy {
    background-color: #d1fae5;
    color: #065f46;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.difficulty-badge-medium {
    background-color: #fef3c7;
    color: #92400e;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.difficulty-badge-hard {
    background-color: #fee2e2;
    color: #991b1b;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.difficulty-badge-default {
    background-color: #f1f5f9;
    color: #475569;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.period-badge-precolonial {
    background-color: #f5f0eb;
    color: #57534e;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.period-badge-spanish {
    background-color: #fefce8;
    color: #854d0e;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.period-badge-revolutionary {
    background-color: #fff7ed;
    color: #9a3412;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.period-badge-american {
    background-color: #eff6ff;
    color: #1e40af;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.period-badge-postwar {
    background-color: #faf5ff;
    color: #6b21a8;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.period-badge-default {
    background-color: #f1f5f9;
    color: #475569;
    padding: 4px 12px;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 900;
    display: inline-block;
}

.option-row {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.75rem;
}

.option-row-correct {
    color: #059669;
    font-weight: 900;
}

.option-row-default {
    color: #94a3b8;
    font-weight: 600;
}

.option-label {
    width: 16px;
    flex-shrink: 0;
}

.option-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 120px;
}

.question-answer-option {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 12px;
    border: 1px solid;
    transition: border-color 0.2s, background-color 0.2s;
}

.question-answer-option.selected {
    border-color: #6ee7b7;
    background-color: #f0fdf4;
}

.question-answer-option.unselected {
    border-color: #e2e8f0;
    background-color: #f8fafc;
}

.option-selector-btn {
    flex-shrink: 0;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
}

.option-selector-btn.selected {
    color: #059669;
}

.option-selector-btn.unselected {
    color: #cbd5e1;
}

.option-selector-btn.unselected:hover {
    color: #64748b;
}

.option-prefix {
    flex-shrink: 0;
    width: 24px;
    font-size: 0.75rem;
    font-weight: 900;
    text-transform: uppercase;
}

.option-prefix.selected {
    color: #059669;
}

.option-prefix.unselected {
    color: #94a3b8;
}

.option-text-input {
    flex: 1;
    background: transparent;
    font-size: 0.875rem;
    font-weight: 600;
    color: #1e293b;
    border: none;
    outline: none;
}

.option-text-input::placeholder {
    color: #94a3b8;
}

.option-correct-label {
    flex-shrink: 0;
    font-size: 0.75rem;
    font-weight: 900;
    color: #059669;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.pagination {
    display: flex;
    justify-content: center;
    gap: 8px;
}

.pagination-btn {
    padding: 8px 16px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
}

.pagination-btn.active {
    background-color: #0f172a;
    color: #ffffff;
    border: none;
}

.pagination-btn.inactive {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    color: #64748b;
}

.pagination-btn.inactive:hover {
    border-color: #94a3b8;
}

/* ========================================
   ADMIN PANEL - FEEDBACK
   ======================================== */

.feedback-item {
    padding: 20px;
    border: 1px solid #f1f5f9;
    border-radius: 16px;
    transition: background-color 0.15s;
}

.feedback-item:hover {
    background-color: #f8fafc;
}

.feedback-item-body {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
}

.feedback-item-title {
    font-weight: 900;
    color: #0f172a;
}

.feedback-item-desc {
    font-size: 0.875rem;
    color: #475569;
    margin-top: 8px;
}

.feedback-item-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 12px;
}

.feedback-item-badges {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
}

/* ========================================
   ADMIN SETTINGS
   ======================================== */

.settings-row {
    padding: 20px;
    background-color: #f8fafc;
    border: 1px solid #f1f5f9;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: border-color 0.2s;
}

.settings-row:hover {
    border-color: #e2e8f0;
}

.settings-row-label {
    font-weight: 600;
    color: #334155;
    margin-bottom: 4px;
}

.settings-row-desc {
    font-size: 0.75rem;
    color: #94a3b8;
}

/* ========================================
   PROFILE SETTINGS
   ======================================== */

.profile-section-icon {
    padding: 12px;
    border-radius: 16px;
    margin-right: 12px;
}

.profile-section-icon-default {
    background-color: #f1f5f9;
}

.profile-section-icon-danger {
    background-color: #fef2f2;
}

/* ========================================
   UTILITY
   ======================================== */

.divider {
    border: none;
    border-top: 1px solid #f1f5f9;
    margin: 24px 0;
}

.flex-row {
    display: flex;
    align-items: center;
}

.flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.flex-end {
    display: flex;
    justify-content: flex-end;
}

.flex-gap-2 {
    display: flex;
    gap: 8px;
}

.flex-gap-3 {
    display: flex;
    gap: 12px;
}

.flex-gap-4 {
    display: flex;
    gap: 16px;
}

.space-y-4>*+* {
    margin-top: 16px;
}

.space-y-6>*+* {
    margin-top: 24px;
}

.space-y-8>*+* {
    margin-top: 32px;
}

.space-y-10>*+* {
    margin-top: 40px;
}

.mt-2 {
    margin-top: 8px;
}

.mt-4 {
    margin-top: 16px;
}

.mt-6 {
    margin-top: 24px;
}

.text-sm {
    font-size: 0.875rem;
}

.text-xs {
    font-size: 0.75rem;
}

.text-slate-400 {
    color: #94a3b8;
}

.text-slate-500 {
    color: #64748b;
}

.text-slate-600 {
    color: #475569;
}

.text-slate-900 {
    color: #0f172a;
}

.text-emerald-500 {
    color: #10b981;
}

.font-semibold {
    font-weight: 600;
}

.font-bold {
    font-weight: 700;
}

.font-black {
    font-weight: 900;
}

.italic {
    font-style: italic;
}

.no-results {
    padding: 12px 16px;
    font-size: 0.75rem;
    font-weight: 700;
    color: #94a3b8;
    font-style: italic;
}

.section-header-icon-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 32px;
}
````

## File: chrono-dashboard/src/index.js
````javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
````

## File: chrono-dashboard/src/logo.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/><circle cx="420.9" cy="296.5" r="45.7"/><path d="M520.5 78.1z"/></g></svg>
````

## File: chrono-dashboard/src/pages/AdminPanel.js
````javascript
import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import AdminSidebar from '../components/AdminSidebar';
import QuestionManagement from './QuestionManagement';
import toast, { Toaster } from 'react-hot-toast';
import { Users, Trash2, BookOpen, Edit2, AlertCircle, Lock, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

const API_BASE = "http://localhost:3000/api/v1";

const StatCard = ({ title, value, icon }) => (
    <div className="stat-card">
        <p className="stat-card-label">{title}</p>
        <div className="stat-card-icon-row">
            <div className="text-slate-900">{icon}</div>
            <p className="stat-card-value">{value}</p>
        </div>
    </div>
);

const AdminPanel = () => {
    const { teacher, logout } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [loading, setLoading] = useState(false);

    const [users, setUsers] = useState({ teachers: [], students: [] });
    const [searchTerm, setSearchTerm] = useState('');

    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [editingUserType, setEditingUserType] = useState(null);
    const [editFormData, setEditFormData] = useState({ name: '', email: '', role: 'teacher', adminLevel: '' });

    const [analytics, setAnalytics] = useState(null);
    const [activityLogs, setActivityLogs] = useState([]);
    const [feedback, setFeedback] = useState([]);
    const [feedbackSearch, setFeedbackSearch] = useState('');
    const [expandedFeedback, setExpandedFeedback] = useState(null);

    const [settingsForm, setSettingsForm] = useState({
        max_learning_groups_per_instructor: '',
        max_learners_per_group: ''
    });
    const [settingsSaving, setSettingsSaving] = useState(false);

    const token = localStorage.getItem('teacherToken');
    const headers = useMemo(() => ({ Authorization: `Bearer ${token}` }), [token]);

    useEffect(() => {
        if (teacher && teacher.role !== 'admin') {
            toast.error('Admin access required');
            logout();
        }
    }, [teacher, logout]);

    const fetchAllUsers = useCallback(async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`${API_BASE}/admin/users`, { headers });
            setUsers(data);
            toast.success('Users loaded');
        } catch (error) {
            toast.error('Failed to load users');
        }
        setLoading(false);
    }, [headers]);

    const handleDeactivateUser = async (userId, userType) => {
        if (window.confirm('Are you sure you want to deactivate this user?')) {
            try {
                await axios.post(`${API_BASE}/admin/users/deactivate`, { userId, userType }, { headers });
                toast.success('User deactivated');
                fetchAllUsers();
            } catch (error) {
                toast.error('Failed to deactivate user');
            }
        }
    };

    const handleDeleteUser = async (userId, userType) => {
        if (window.confirm('Confirm deletion? This action cannot be undone!')) {
            try {
                await axios.delete(`${API_BASE}/admin/users/${userId}`, { headers, data: { userId, userType } });
                toast.success('User deleted');
                fetchAllUsers();
            } catch (error) {
                toast.error('Failed to delete user');
            }
        }
    };

    const handleEditUser = (user, userType) => {
        setEditingUser(user);
        setEditingUserType(userType);
        setEditFormData({ name: user.name, email: user.email, role: user.role || 'teacher', adminLevel: user.adminLevel || '' });
        setEditModalOpen(true);
    };

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`${API_BASE}/admin/users/${editingUser._id}/${editingUserType}`, editFormData, { headers });
            toast.success('User updated successfully');
            setEditModalOpen(false);
            fetchAllUsers();
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to update user');
        }
    };

    const fetchAnalytics = useCallback(async () => {
        setLoading(true);
        try {
            const [analyticsRes, activityRes] = await Promise.all([
                axios.get(`${API_BASE}/admin/analytics`, { headers }),
                axios.get(`${API_BASE}/admin/activity-logs-detailed?limit=50`, { headers })
            ]);
            setAnalytics(analyticsRes.data);
            setActivityLogs(activityRes.data.logs || []);
        } catch (error) {
            toast.error('Failed to load analytics');
        }
        setLoading(false);
    }, [headers]);

    const fetchFeedback = useCallback(async () => {
        try {
            const { data } = await axios.get(`${API_BASE}/admin/feedback`, { headers });
            setFeedback(data);
        } catch (error) {
            toast.error('Failed to load feedback');
        }
    }, [headers]);

    const fetchSettings = useCallback(async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(`${API_BASE}/admin/settings`, { headers });
            setSettingsForm(prev => ({
                ...prev,
                max_learning_groups_per_instructor: data.max_learning_groups_per_instructor?.value || 5,
                max_learners_per_group: data.max_learners_per_group?.value || 50
            }));
        } catch (error) {
            toast.error('Failed to load settings');
        }
        setLoading(false);
    }, [headers]);

    const handleSaveSettings = async () => {
        setSettingsSaving(true);
        try {
            await axios.post(`${API_BASE}/admin/settings`, {
                key: 'max_learning_groups_per_instructor',
                value: parseInt(settingsForm.max_learning_groups_per_instructor),
                type: 'number',
                category: 'security'
            }, { headers });
            await axios.post(`${API_BASE}/admin/settings`, {
                key: 'max_learners_per_group',
                value: parseInt(settingsForm.max_learners_per_group),
                type: 'number',
                category: 'security'
            }, { headers });
            toast.success('Settings saved successfully');
            fetchSettings();
        } catch (error) {
            toast.error('Failed to save settings');
        }
        setSettingsSaving(false);
    };

    useEffect(() => {
        if (activeTab === 'users') fetchAllUsers();
        else if (activeTab === 'dashboard') { fetchAnalytics(); fetchAllUsers(); }
        else if (activeTab === 'feedback') fetchFeedback();
        else if (activeTab === 'settings') fetchSettings();
    }, [activeTab, fetchAllUsers, fetchAnalytics, fetchFeedback, fetchSettings]);

    // Search filters — computed outside sub-components so they react to state changes
    const filteredTeachers = users.teachers?.filter(t =>
        t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.email.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    const filteredStudents = users.students?.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (s.classCode || '').toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    const filteredFeedback = feedback.filter(fb => {
        if (!feedbackSearch) return true;
        const q = feedbackSearch.toLowerCase();
        return (
            fb.title?.toLowerCase().includes(q) ||
            fb.description?.toLowerCase().includes(q) ||
            fb.submittedBy?.email?.toLowerCase().includes(q) ||
            fb.submittedBy?.name?.toLowerCase().includes(q) ||
            fb.type?.toLowerCase().includes(q) ||
            fb.status?.toLowerCase().includes(q)
        );
    });

    const UsersList = () => (
        <div className="space-y-8">
            <div className="flex-between">
                <h2 className="page-title">User Management</h2>
                <input
                    type="text"
                    placeholder="Search by name, email, or class code..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-input-sm"
                    style={{ width: '280px' }}
                />
            </div>

            <div className="card">
                <h3 className="section-title" style={{ marginBottom: '24px' }}>
                    Instructors ({filteredTeachers.length}{searchTerm ? ` of ${users.teachers?.length || 0}` : ''})
                </h3>
                <div className="table-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Classes</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTeachers.length === 0 ? (
                                <tr><td colSpan={5} style={{ textAlign: 'center', color: '#94a3b8', padding: '24px' }}>No instructors match your search</td></tr>
                            ) : filteredTeachers.map(t => (
                                <tr key={t._id}>
                                    <td className="table-cell-name">{t.name}</td>
                                    <td className="table-cell-sub">{t.email}</td>
                                    <td className="table-cell-sub">{t.totalSections}</td>
                                    <td>
                                        <span className={`badge ${t.isActive ? 'badge-active' : 'badge-inactive'}`}>
                                            {t.isActive ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="table-actions">
                                            <button onClick={() => handleEditUser(t, 'teacher')} className="btn-icon btn-icon-blue" title="Edit"><Edit2 size={16} /></button>
                                            <button onClick={() => handleDeactivateUser(t._id, 'teacher')} className="btn-icon btn-icon-yellow" title="Deactivate"><AlertCircle size={16} /></button>
                                            <button onClick={() => handleDeleteUser(t._id, 'teacher')} className="btn-icon btn-icon-red" title="Delete"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="card">
                <h3 className="section-title" style={{ marginBottom: '24px' }}>
                    Learners ({filteredStudents.length}{searchTerm ? ` of ${users.students?.length || 0}` : ''})
                </h3>
                <div className="table-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Class Code</th>
                                <th>Performance</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.length === 0 ? (
                                <tr><td colSpan={5} style={{ textAlign: 'center', color: '#94a3b8', padding: '24px' }}>No learners match your search</td></tr>
                            ) : filteredStudents.map(s => (
                                <tr key={s._id}>
                                    <td className="table-cell-name">{s.name}</td>
                                    <td className="table-cell-sub">{s.email}</td>
                                    <td className="table-cell-mono">{s.classCode}</td>
                                    <td><span className="badge badge-amber">{s.score || 0}</span></td>
                                    <td>
                                        <div className="table-actions">
                                            <button onClick={() => handleEditUser(s, 'student')} className="btn-icon btn-icon-blue" title="Edit"><Edit2 size={16} /></button>
                                            <button onClick={() => handleDeleteUser(s._id, 'student')} className="btn-icon btn-icon-red" title="Delete"><Trash2 size={16} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const AnalyticsDashboard = () => {
        const totalUsers = (users.teachers?.length || 0) + (users.students?.length || 0);
        return (
            <div className="space-y-10">
                <div>
                    <h2 className="page-title">Learning Analytics</h2>
                    <p className="page-subtitle">System-wide overview and statistics</p>
                </div>
                <div className="grid-4">
                    <StatCard title="Total Users" value={totalUsers} icon={<Users size={24} />} />
                    <StatCard title="Instructors" value={users.teachers?.length || 0} icon={<Users size={24} />} />
                    <StatCard title="Learners" value={users.students?.length || 0} icon={<Users size={24} />} />
                    <StatCard title="Learning Groups" value={analytics?.totalSections || 0} icon={<BookOpen size={24} />} />
                </div>

                {activityLogs.length > 0 && (
                    <div className="card">
                        <div style={{ marginBottom: '24px' }}>
                            <h3 className="section-title">Recent Activity</h3>
                            <p className="section-subtitle">Last 50 system activities</p>
                        </div>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                                        {['User', 'Action', 'Resource', 'Timestamp', 'Status', 'Details'].map(h => (
                                            <th key={h} style={{ padding: '12px', textAlign: 'left', fontWeight: 700, color: '#475569', fontSize: '0.875rem' }}>{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {activityLogs.map(log => (
                                        <tr key={log._id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                            <td style={{ padding: '12px', fontSize: '0.875rem' }}>
                                                <p style={{ fontWeight: 600, color: '#1e293b', margin: 0 }}>{log.userName || 'Unknown'}</p>
                                                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: '4px 0 0 0' }}>{log.userEmail}</p>
                                            </td>
                                            <td style={{ padding: '12px', fontSize: '0.875rem' }}>
                                                <span style={{ backgroundColor: '#e0e7ff', color: '#3730a3', padding: '4px 8px', borderRadius: '4px', fontWeight: 600 }}>
                                                    {log.action?.replace(/_/g, ' ')}
                                                </span>
                                            </td>
                                            <td style={{ padding: '12px', fontSize: '0.875rem', color: '#475569' }}>{log.resource || 'N/A'}</td>
                                            <td style={{ padding: '12px', fontSize: '0.875rem', color: '#64748b', whiteSpace: 'nowrap' }}>
                                                {new Date(log.createdAt).toLocaleString()}
                                            </td>
                                            <td style={{ padding: '12px', fontSize: '0.875rem' }}>
                                                <span style={{
                                                    backgroundColor: log.status === 'success' ? '#dcfce7' : '#fee2e2',
                                                    color: log.status === 'success' ? '#166534' : '#991b1b',
                                                    padding: '4px 8px', borderRadius: '4px', fontWeight: 600
                                                }}>
                                                    {log.status?.toUpperCase()}
                                                </span>
                                            </td>
                                            <td style={{ padding: '12px', fontSize: '0.875rem', color: '#64748b', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                {log.details ? JSON.stringify(log.details).substring(0, 50) + '...' : '-'}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const FeedbackSection = () => (
        <div className="space-y-8">
            <div className="flex-between">
                <div>
                    <h2 className="page-title">Feedback & Support</h2>
                    <p className="page-subtitle">Instructor feedback and support tickets</p>
                </div>
                <input
                    type="text"
                    placeholder="Search feedback..."
                    value={feedbackSearch}
                    onChange={(e) => setFeedbackSearch(e.target.value)}
                    className="form-input-sm"
                    style={{ width: '240px' }}
                />
            </div>

            <div className="card">
                <h3 className="section-title" style={{ marginBottom: '24px' }}>
                    Tickets ({filteredFeedback.length}{feedbackSearch ? ` of ${feedback.length}` : ''})
                </h3>
                <div className="space-y-4">
                    {filteredFeedback.length === 0 ? (
                        <div className="empty-state">
                            <MessageSquare className="empty-state-icon" size={48} />
                            <p className="empty-state-text">No feedback found</p>
                        </div>
                    ) : filteredFeedback.map(fb => {
                        const isExpanded = expandedFeedback === fb._id;
                        return (
                            <div key={fb._id} className="feedback-item">
                                <div className="feedback-item-body">
                                    <div style={{ flex: 1 }}>
                                        <h4 className="feedback-item-title">{fb.title}</h4>
                                        <p className="feedback-item-desc">
                                            {isExpanded
                                                ? fb.description
                                                : `${fb.description?.substring(0, 120) || ''}${fb.description?.length > 120 ? '...' : ''}`
                                            }
                                        </p>
                                        <div className="feedback-item-meta">
                                            <p className="table-cell-meta">From: {fb.submittedBy?.name || fb.submittedBy?.email || '—'}</p>
                                            <span className="text-slate-400">•</span>
                                            <p className="table-cell-meta">{new Date(fb.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="feedback-item-badges">
                                        <span className={`badge ${fb.type === 'bug_report' ? 'badge-red' : 'badge-blue'}`}>
                                            {fb.type?.replace(/_/g, ' ')}
                                        </span>
                                        <span className={`badge ${fb.status === 'open' ? 'badge-open' : 'badge-resolved'}`}>
                                            {fb.status}
                                        </span>
                                        {fb.description?.length > 120 && (
                                            <button
                                                onClick={() => setExpandedFeedback(isExpanded ? null : fb._id)}
                                                style={{
                                                    background: 'none', border: '1px solid #e2e8f0',
                                                    borderRadius: '6px', padding: '3px 8px',
                                                    cursor: 'pointer', color: '#64748b',
                                                    display: 'inline-flex', alignItems: 'center', gap: '3px',
                                                    fontSize: '0.75rem', fontWeight: 600,
                                                }}
                                            >
                                                {isExpanded ? <><ChevronUp size={12} /> Less</> : <><ChevronDown size={12} /> More</>}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    const SettingsSection = () => (
        <div className="space-y-8">
            <h2 className="page-title">System Settings</h2>
            <div className="card">
                <h3 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                    <Lock size={20} style={{ color: '#475569' }} /> Security Settings
                </h3>
                {loading ? (
                    <div style={{ textAlign: 'center', color: '#94a3b8', fontWeight: 600 }}>Loading settings...</div>
                ) : (
                    <div className="space-y-6">
                        <div className="settings-row">
                            <div style={{ flex: 1 }}>
                                <p className="settings-row-label">Max Learning Groups Per Instructor</p>
                                <p className="settings-row-desc">Maximum number of learning groups an instructor can create</p>
                            </div>
                            <input
                                type="number"
                                value={settingsForm.max_learning_groups_per_instructor}
                                onChange={(e) => setSettingsForm(prev => ({ ...prev, max_learning_groups_per_instructor: e.target.value }))}
                                disabled={settingsSaving}
                                className="form-input-number"
                            />
                        </div>
                        <div className="settings-row">
                            <div style={{ flex: 1 }}>
                                <p className="settings-row-label">Max Learners Per Learning Group</p>
                                <p className="settings-row-desc">Maximum number of learners that can join a learning group</p>
                            </div>
                            <input
                                type="number"
                                value={settingsForm.max_learners_per_group}
                                onChange={(e) => setSettingsForm(prev => ({ ...prev, max_learners_per_group: e.target.value }))}
                                disabled={settingsSaving}
                                className="form-input-number"
                            />
                        </div>
                        <div className="flex-gap-3" style={{ paddingTop: '16px' }}>
                            <button onClick={handleSaveSettings} disabled={settingsSaving} className="btn-dark">
                                {settingsSaving ? 'Saving...' : 'Save Settings'}
                            </button>
                            <button onClick={fetchSettings} disabled={settingsSaving} className="btn-outline-dark">
                                Reset
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="page">
            <Toaster position="top-right" />
            <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <main className="main-padded">
                <header className="page-header">
                    <h2 className="page-title">Welcome, {teacher?.name || 'Admin'}</h2>
                </header>

                {loading && <div style={{ textAlign: 'center', color: '#94a3b8', fontWeight: 700 }}>Loading...</div>}
                {activeTab === 'dashboard' && <AnalyticsDashboard />}
                {activeTab === 'users' && <UsersList />}
                {activeTab === 'questions' && <QuestionManagement />}
                {activeTab === 'feedback' && <FeedbackSection />}
                {activeTab === 'settings' && <SettingsSection />}
            </main>

            {editModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-md">
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '24px' }}>Edit User</h3>
                        <form onSubmit={handleUpdateUser} className="space-y-6">
                            <div className="form-group">
                                <label className="form-label-sm">Name</label>
                                <input
                                    type="text"
                                    value={editFormData.name}
                                    onChange={(e) => setEditFormData(prev => ({ ...prev, name: e.target.value }))}
                                    className="form-input-sm"
                                    placeholder="User name"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label-sm">Email</label>
                                <input
                                    type="email"
                                    value={editFormData.email}
                                    onChange={(e) => setEditFormData(prev => ({ ...prev, email: e.target.value }))}
                                    className="form-input-sm"
                                    placeholder="user@example.com"
                                />
                            </div>
                            {editingUserType === 'teacher' && (
                                <>
                                    <div className="form-group">
                                        <label className="form-label-sm">Role</label>
                                        <select
                                            value={editFormData.role}
                                            onChange={(e) => setEditFormData(prev => ({ ...prev, role: e.target.value, adminLevel: e.target.value === 'teacher' ? '' : prev.adminLevel }))}
                                            className="form-select"
                                        >
                                            <option value="teacher">Teacher</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </div>
                                    {editFormData.role === 'admin' && (
                                        <div className="form-group">
                                            <label className="form-label-sm">Admin Level</label>
                                            <select
                                                value={editFormData.adminLevel}
                                                onChange={(e) => setEditFormData(prev => ({ ...prev, adminLevel: e.target.value }))}
                                                className="form-select"
                                            >
                                                <option value="">Select Level</option>
                                                <option value="super_admin">Super Admin</option>
                                                <option value="content_admin">Content Admin</option>
                                                <option value="support_admin">Support Admin</option>
                                            </select>
                                        </div>
                                    )}
                                </>
                            )}
                            <div className="flex-gap-3 flex-end" style={{ paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
                                <button type="button" onClick={() => setEditModalOpen(false)} className="btn-outline">Cancel</button>
                                <button type="submit" className="btn-indigo">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPanel;
````

## File: chrono-dashboard/src/pages/ClassResults.js
````javascript
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { BarChart3, Download, ChevronRight } from 'lucide-react';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3000/api/v1';

const ClassResults = ({ sections = [], selectedSection = '', onSectionSelect = () => { } }) => {
    const [activeSection, setActiveSection] = useState(selectedSection);

    const [scores, setScores] = useState([]);
    const [gbLoading, setGbLoading] = useState(false);
    const [gbError, setGbError] = useState('');

    const fetchGradebook = useCallback(async (classCode) => {
        if (!classCode) return;
        setGbLoading(true);
        setGbError('');
        try {
            const token = localStorage.getItem('teacherToken');
            const { data } = await axios.get(`${API_BASE}/analytics/overall`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setScores(data.filter(s => s.classCode === classCode));
        } catch (err) {
            setGbError(err.response?.data?.message || 'Error fetching gradebook');
        } finally {
            setGbLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!activeSection) return;
        fetchGradebook(activeSection);
    }, [activeSection, fetchGradebook]);

    const handleSectionChange = (classCode) => {
        setActiveSection(classCode);
        onSectionSelect(classCode);
    };

    const downloadCSV = () => {
        if (scores.length === 0) return;
        const sectionName = sections.find(s => s.classCode === activeSection)?.sectionName || activeSection;
        const headers = ['Rank', 'Student Name', 'Score', 'Level Reached', 'Submitted'];
        const sorted = [...scores].sort((a, b) => b.score - a.score);
        const rows = sorted.map((s, i) => [
            i + 1,
            `"${s.studentName}"`,
            s.score,
            `"${s.levelReached || ''}"`,
            new Date(s.createdAt).toLocaleDateString(),
        ]);
        const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', `Results_${sectionName}.csv`);
        link.click();
    };

    const currentSectionName =
        sections.find(s => s.classCode === activeSection)?.sectionName || 'Selected Class';

    const EmptyState = ({ icon: Icon, message, sub }) => (
        <div className="empty-state">
            <Icon className="empty-state-icon" size={56} />
            <p className="empty-state-text">{message}</p>
            {sub && <p className="empty-state-sub">{sub}</p>}
        </div>
    );

    return (
        <div className="content-area space-y-8">
            <header className="flex-between">
                <h2 className="page-title">Class Results</h2>
            </header>

            {sections.length > 0 ? (
                <div className="section-panel">
                    <div className="section-chips">
                        {sections.map(sec => (
                            <button
                                key={sec.classCode}
                                onClick={() => handleSectionChange(sec.classCode)}
                                className={`section-chip-btn${activeSection === sec.classCode ? ' active' : ''}`}
                                style={{ background: activeSection === sec.classCode ? '' : '#f8fafc' }}
                            >
                                {sec.sectionName}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="card" style={{ textAlign: 'center' }}>
                    <p className="empty-state-text">No sections yet — create one from the Overview tab</p>
                </div>
            )}

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ padding: '32px', borderBottom: '1px solid #f1f5f9' }} className="flex-between">
                    <div>
                        <h3 className="section-title">Learning Progress</h3>
                        <p className="section-subtitle">
                            {activeSection
                                ? <>Performance for <strong>{currentSectionName}</strong></>
                                : 'Select a class above'
                            }
                        </p>
                    </div>
                    {scores.length > 0 && (
                        <button onClick={downloadCSV} className="btn-emerald">
                            <Download size={14} /> Export CSV
                        </button>
                    )}
                </div>

                {gbLoading ? (
                    <EmptyState icon={BarChart3} message="Loading..." />
                ) : gbError ? (
                    <div style={{ margin: '24px' }} className="alert-error">{gbError}</div>
                ) : !activeSection ? (
                    <EmptyState icon={BarChart3} message="Select a class to view grades" />
                ) : scores.length === 0 ? (
                    <EmptyState icon={BarChart3} message="No learner data found" sub="Scores will appear as students complete assessments" />
                ) : (
                    <div className="table-wrapper" style={{ border: 'none', borderRadius: 0 }}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Learner Name</th>
                                    <th>Score</th>
                                    <th>Level Reached</th>
                                    <th>Submitted</th>
                                    <th style={{ textAlign: 'right' }}>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...scores].sort((a, b) => b.score - a.score).map((s, i) => (
                                    <tr key={i}>
                                        <td className="table-cell-meta">{i + 1}</td>
                                        <td className="table-cell-name">{s.studentName}</td>
                                        <td><span className="badge badge-amber">{s.score}</span></td>
                                        <td className="table-cell-sub">{s.levelReached || '—'}</td>
                                        <td className="table-cell-meta">{s.createdAt ? new Date(s.createdAt).toLocaleDateString() : '—'}</td>
                                        <td style={{ textAlign: 'right' }}>
                                            <ChevronRight size={18} style={{ color: '#cbd5e1', display: 'inline' }} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClassResults;
````

## File: chrono-dashboard/src/pages/Dashboard.js
````javascript
import React, { useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import TeacherSidebar from '../components/TeacherSidebar';
import ProfileSettings from './ProfileSettings';
import ClassResults from './ClassResults';
import toast, { Toaster } from 'react-hot-toast';
import { BarChart3, Trash, Copy, Archive, RotateCcw } from 'lucide-react';

const API_BASE = "http://localhost:3000/api/v1";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const { teacher, setTeacher } = useContext(AuthContext);
    const [selectedSection, setSelectedSection] = useState("");
    const [newSectionName, setNewSectionName] = useState("");
    const [summary, setSummary] = useState({ totalStudents: 0, avgScore: 0, totalAssessments: 0 });
    const [modalOpen, setModalOpen] = useState(false);
    const [showArchived, setShowArchived] = useState(false);

    const [feedbackTitle, setFeedbackTitle] = useState("");
    const [feedbackDescription, setFeedbackDescription] = useState("");
    const [feedbackType, setFeedbackType] = useState("general_feedback");
    const [feedbackPriority, setFeedbackPriority] = useState("medium");
    const [feedbackLoading, setFeedbackLoading] = useState(false);

    const fetchTeacherProfile = useCallback(async () => {
        const token = localStorage.getItem('teacherToken');
        if (!token) return;
        try {
            const { data } = await axios.get(`${API_BASE}/auth/profile?t=${Date.now()}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTeacher(data);
        } catch (err) {
            console.error("Session expired or sync failed");
        }
    }, [setTeacher]);

    useEffect(() => {
        if (teacher?.sections?.length > 0) {
            const activeSections = teacher.sections.filter(s => !s.isArchived);
            const sectionExists = teacher.sections.some(s => s.classCode === selectedSection);
            if (!selectedSection || !sectionExists) {
                const initialSection = activeSections.length > 0
                    ? activeSections[0].classCode
                    : teacher.sections[0].classCode;
                setSelectedSection(initialSection);
            }
        } else {
            setSelectedSection("");
        }
    }, [teacher, selectedSection]);

    const fetchSummary = useCallback(async () => {
        if (!selectedSection) {
            setSummary({ totalStudents: 0, avgScore: 0, totalAssessments: 0 });
            return;
        }
        try {
            const token = localStorage.getItem('teacherToken');
            const headers = { Authorization: `Bearer ${token}` };
            const [scoresRes, questRes] = await Promise.all([
                axios.get(`${API_BASE}/analytics/overall`, { headers }),
                axios.get(`${API_BASE}/questions`, { headers })
            ]);
            const filtered = scoresRes.data.filter(s => s.classCode === selectedSection);
            setSummary({
                totalStudents: filtered.length,
                avgScore: filtered.length > 0
                    ? (filtered.reduce((acc, curr) => acc + (curr.score || 0), 0) / filtered.length).toFixed(1)
                    : 0,
                totalAssessments: questRes.data.length
            });
        } catch (err) {
            console.error("Summary fetch error");
        }
    }, [selectedSection]);

    useEffect(() => { fetchTeacherProfile(); }, [fetchTeacherProfile]);
    useEffect(() => { fetchSummary(); }, [fetchSummary]);
    useEffect(() => {
        if (teacher) localStorage.setItem('teacherData', JSON.stringify(teacher));
    }, [teacher]);

    const handleDeleteSection = async (classCode, e) => {
        e.stopPropagation();
        if (!window.confirm("Are you sure? This will permanently delete the section and its scores.")) return;
        try {
            const token = localStorage.getItem('teacherToken');
            const { data } = await axios.delete(`${API_BASE}/teacher/delete-section/${classCode}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success("Section removed successfully");
            if (data.updatedTeacher) setTeacher(data.updatedTeacher);
            else fetchTeacherProfile();
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to delete section");
        }
    };

    const handleArchiveSection = async (classCode, e) => {
        e.stopPropagation();
        try {
            const token = localStorage.getItem('teacherToken');
            const { data } = await axios.post(`${API_BASE}/teacher/archive-section/${classCode}`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success("Section archived successfully");
            if (data.updatedTeacher) setTeacher(data.updatedTeacher);
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to archive section");
        }
    };

    const handleUnarchiveSection = async (classCode, e) => {
        e.stopPropagation();
        try {
            const token = localStorage.getItem('teacherToken');
            const { data } = await axios.post(`${API_BASE}/teacher/unarchive-section/${classCode}`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            toast.success("Section restored successfully");
            if (data.updatedTeacher) setTeacher(data.updatedTeacher);
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to restore section");
        }
    };

    const handleAddSection = async () => {
        if (!newSectionName.trim()) return toast.error("Enter section name");
        try {
            const token = localStorage.getItem('teacherToken');
            const { data } = await axios.post(`${API_BASE}/teacher/add-section`,
                { sectionName: newSectionName },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setTeacher(data.updatedTeacher);
            setSelectedSection(data.newSection.classCode);
            setModalOpen(false);
            setNewSectionName("");
            toast.success("Section created");
        } catch (err) { toast.error("Failed to create section"); }
    };

    const handleSubmitFeedback = async () => {
        if (!feedbackTitle.trim() || !feedbackDescription.trim()) {
            return toast.error("Title and description are required");
        }
        setFeedbackLoading(true);
        try {
            const token = localStorage.getItem('teacherToken');
            await axios.post(`${API_BASE}/auth/feedback`, {
                title: feedbackTitle,
                description: feedbackDescription,
                type: feedbackType,
                priority: feedbackPriority
            }, { headers: { Authorization: `Bearer ${token}` } });
            toast.success("Feedback submitted successfully!");
            setFeedbackTitle("");
            setFeedbackDescription("");
            setFeedbackType("general_feedback");
            setFeedbackPriority("medium");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to submit feedback");
        } finally {
            setFeedbackLoading(false);
        }
    };

    const activeSections = teacher?.sections?.filter(s => !s.isArchived) || [];
    const archivedSections = teacher?.sections?.filter(s => s.isArchived) || [];

    return (
        <div className="page">
            <Toaster position="top-right" />
            <TeacherSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <main className="main-content">

                {activeTab === 'overview' && (
                    <div className="content-area">
                        <header className="page-header">
                            <h2 className="page-title">Welcome, {teacher?.name || 'Instructor'}</h2>
                            <button onClick={() => setModalOpen(true)} className="btn-dark">
                                New Section
                            </button>
                        </header>

                        <div className="space-y-4" style={{ marginBottom: '40px' }}>
                            <div className="section-panel">
                                <div className="section-panel-header">
                                    <p className="section-panel-label">Active Classes</p>
                                    <span className="section-panel-count">({activeSections.length})</span>
                                </div>
                                <div className="section-chips">
                                    {activeSections.length > 0 ? activeSections.map(sec => (
                                        <div key={sec.classCode} className="section-chip">
                                            <button
                                                onClick={() => setSelectedSection(sec.classCode)}
                                                className={`section-chip-btn${selectedSection === sec.classCode ? ' active' : ''}`}
                                            >
                                                {sec.sectionName}
                                            </button>
                                            <button onClick={(e) => handleArchiveSection(sec.classCode, e)} title="Archive" className="section-chip-icon-btn">
                                                <Archive size={14} />
                                            </button>
                                            <button onClick={(e) => handleDeleteSection(sec.classCode, e)} title="Delete" className="section-chip-icon-btn section-chip-icon-btn-danger">
                                                <Trash size={14} />
                                            </button>
                                        </div>
                                    )) : (
                                        <p className="no-results">No active sections created yet.</p>
                                    )}
                                </div>
                            </div>

                            {archivedSections.length > 0 && (
                                <div className="section-panel">
                                    <button onClick={() => setShowArchived(!showArchived)} className="archived-toggle-btn">
                                        <span className="archived-toggle-label">
                                            <Archive size={16} /> Archived Classes
                                        </span>
                                        <span className="section-panel-count">({archivedSections.length})</span>
                                        <span className={`archive-chevron${showArchived ? ' open' : ''}`}>▼</span>
                                    </button>
                                    {showArchived && (
                                        <div className="section-chips">
                                            {archivedSections.map(sec => (
                                                <div key={sec.classCode} className="section-chip section-chip-archived">
                                                    <button onClick={() => setSelectedSection(sec.classCode)} className="section-chip-btn">
                                                        {sec.sectionName}
                                                    </button>
                                                    <button onClick={(e) => handleUnarchiveSection(sec.classCode, e)} title="Restore" className="section-chip-icon-btn">
                                                        <RotateCcw size={14} />
                                                    </button>
                                                    <button onClick={(e) => handleDeleteSection(sec.classCode, e)} title="Delete" className="section-chip-icon-btn section-chip-icon-btn-danger">
                                                        <Trash size={14} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="space-y-10">
                            <div className="grid-3">
                                <div className="stat-card">
                                    <p className="stat-card-label">Learners</p>
                                    <p className="stat-card-value">{summary.totalStudents}</p>
                                </div>
                                <div className="stat-card">
                                    <p className="stat-card-label">Missions</p>
                                    <p className="stat-card-value">{summary.totalAssessments}</p>
                                </div>
                                <div className="stat-card">
                                    <p className="stat-card-label">Average Score</p>
                                    <p className="stat-card-value">{summary.avgScore}</p>
                                </div>
                            </div>

                            {selectedSection && (
                                <div className="access-code-card">
                                    <p className="access-code-label">Section Access Code</p>
                                    <div className="access-code-row">
                                        <p className="access-code-text">{selectedSection}</p>
                                        <button
                                            onClick={() => { navigator.clipboard.writeText(selectedSection); toast.success("Copied!"); }}
                                            className="access-code-copy-btn"
                                        >
                                            <Copy size={20} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'results' && (
                    <ClassResults
                        sections={activeSections}
                        selectedSection={selectedSection}
                        onSectionSelect={setSelectedSection}
                    />
                )}

                {activeTab === 'settings' && (
                    <div className="content-area">
                        <ProfileSettings />
                    </div>
                )}

                {activeTab === 'feedback' && (
                    <div className="content-area space-y-8">
                        <div>
                            <h2 className="page-title">Send Feedback</h2>
                            <p className="page-subtitle">Help us improve by sharing your thoughts</p>
                        </div>

                        <div className="card">
                            <div className="space-y-6">
                                <div className="form-group">
                                    <label className="form-label-sm">Title *</label>
                                    <input
                                        type="text"
                                        className="form-input-sm"
                                        placeholder="Brief title of your feedback"
                                        value={feedbackTitle}
                                        onChange={(e) => setFeedbackTitle(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label-sm">Description *</label>
                                    <textarea
                                        className="form-textarea"
                                        placeholder="Detailed description of your feedback"
                                        rows="4"
                                        value={feedbackDescription}
                                        onChange={(e) => setFeedbackDescription(e.target.value)}
                                    />
                                </div>
                                <div className="grid-2">
                                    <div className="form-group">
                                        <label className="form-label-sm">Type</label>
                                        <select className="form-select-lg" value={feedbackType} onChange={(e) => setFeedbackType(e.target.value)}>
                                            <option value="general_feedback">General Feedback</option>
                                            <option value="bug_report">Bug Report</option>
                                            <option value="feature_request">Feature Request</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label-sm">Priority</label>
                                        <select className="form-select-lg" value={feedbackPriority} onChange={(e) => setFeedbackPriority(e.target.value)}>
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                            <option value="critical">Critical</option>
                                        </select>
                                    </div>
                                </div>
                                <button onClick={handleSubmitFeedback} disabled={feedbackLoading} className="btn-indigo-full">
                                    {feedbackLoading ? "Submitting..." : "Submit Feedback"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'overview' && !selectedSection && activeSections.length === 0 && (
                    <div className="content-area" style={{ paddingTop: 0 }}>
                        <div className="empty-state">
                            <BarChart3 className="empty-state-icon" size={56} />
                            <p className="empty-state-text">Create your first section to get started</p>
                        </div>
                    </div>
                )}
            </main>

            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3 className="modal-title">New Section</h3>
                        <p className="modal-subtitle">Give your classroom a unique identifier.</p>
                        <input
                            type="text"
                            className="modal-input"
                            placeholder="e.g. Grade 10 - Rizal"
                            value={newSectionName}
                            onChange={(e) => setNewSectionName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAddSection()}
                        />
                        <div className="modal-actions">
                            <button onClick={() => setModalOpen(false)} className="btn-ghost" style={{ flex: 1 }}>Cancel</button>
                            <button onClick={handleAddSection} className="btn-indigo" style={{ flex: 2 }}>
                                Create Section
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
````

## File: chrono-dashboard/src/pages/LoginPage.js
````javascript
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { login, teacher } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (teacher) navigate('/dashboard');
    }, [teacher, navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const payload = {
                email: email.trim().toLowerCase(),
                password: password
            };
            const response = await axios.post('http://localhost:3000/api/v1/auth/login', payload);
            const data = response.data;
            if (data.token && (data.teacher || data.name)) {
                const teacherData = data.teacher || data;
                login(teacherData, data.token);
                toast.success("Login Successful!");
                navigate('/dashboard');
            }
        } catch (error) {
            console.error("Login Error:", error.response?.data);
            toast.error(error.response?.data?.message || "Invalid email or password.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="page-centered">
            <Toaster position="top-right" />

            <div className="auth-wrapper">
                <div className="auth-brand">
                    <h1 className="auth-brand-title">ChronoQuest</h1>
                    <p className="auth-brand-subtitle">Instructor Portal</p>
                </div>

                <div className="auth-card">
                    <h2 className="auth-card-title">Sign In</h2>

                    <form onSubmit={handleLogin} className="form-stack">
                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                placeholder="your.email@school.com"
                                className="form-input"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <div className="input-password-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    placeholder="Enter your password"
                                    className="form-input"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="password-toggle"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button type="submit" disabled={isLoading} className="btn-primary">
                            {isLoading ? "Authenticating..." : "Sign In"}
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p className="auth-footer-text">
                            New instructor?{' '}
                            <Link to="/register" className="auth-footer-link">Create Account</Link>
                        </p>
                    </div>
                </div>

                <div className="auth-security-note">
                    <p className="auth-security-text">Secure & Encrypted</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
````

## File: chrono-dashboard/src/pages/ProfileSettings.js
````javascript
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { Save, Eye, EyeOff, Lock } from 'lucide-react';

const ProfileSettings = () => {
    const { teacher, setTeacher } = useContext(AuthContext);

    const [name, setName] = useState(teacher?.name || '');
    const [email, setEmail] = useState(teacher?.email || '');
    const [accountLoading, setAccountLoading] = useState(false);

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordLoading, setPasswordLoading] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const token = localStorage.getItem('teacherToken');

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setAccountLoading(true);
        try {
            const { data } = await axios.put('http://localhost:3000/api/v1/auth/profile',
                { name, email },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            const updatedTeacher = { ...teacher, name: data.name, email: data.email };
            setTeacher(updatedTeacher);
            localStorage.setItem('teacherData', JSON.stringify(updatedTeacher));
            toast.success("Account information updated.");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update profile.");
        } finally {
            setAccountLoading(false);
        }
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            toast.error("New passwords do not match.");
            return;
        }
        if (newPassword.length < 6) {
            toast.error("Password must be at least 6 characters long.");
            return;
        }
        setPasswordLoading(true);
        try {
            await axios.put('http://localhost:3000/api/v1/auth/change-password',
                { currentPassword, newPassword },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            toast.success("Password changed successfully.");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to change password.");
        } finally {
            setPasswordLoading(false);
        }
    };

    return (
        <div style={{ width: '100%', paddingTop: '48px', paddingBottom: '48px', paddingLeft: '24px', paddingRight: '24px' }}>
            <div style={{ maxWidth: '960px', margin: '0 auto' }}>
                <div style={{ marginBottom: '48px' }}>
                    <h1 className="page-title">Profile Settings</h1>
                    <p className="page-subtitle">Manage your account information and security preferences.</p>
                </div>

                <div className="space-y-8">
                    <div className="card">
                        <div className="section-header-icon-row">
                            <div className="profile-section-icon profile-section-icon-default">
                                <Lock size={20} style={{ color: '#475569' }} />
                            </div>
                            <div>
                                <h2 className="section-title">Account Information</h2>
                                <p className="section-subtitle">Update your professional identity</p>
                            </div>
                        </div>

                        <form onSubmit={handleUpdateProfile} className="space-y-6">
                            <div className="grid-2">
                                <div className="form-group">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-input"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="divider" style={{ paddingTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
                                <button type="submit" disabled={accountLoading} className="btn-save">
                                    <Save size={16} />
                                    {accountLoading ? "Saving..." : "Save Changes"}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="card">
                        <div className="section-header-icon-row">
                            <div className="profile-section-icon profile-section-icon-danger">
                                <Lock size={20} style={{ color: '#dc2626' }} />
                            </div>
                            <div>
                                <h2 className="section-title">Security</h2>
                                <p className="section-subtitle">Change your password regularly for security</p>
                            </div>
                        </div>

                        <form onSubmit={handleChangePassword} className="space-y-6">
                            <div className="form-group">
                                <label className="form-label">Current Password</label>
                                <div className="input-password-wrapper">
                                    <input
                                        type={showCurrentPassword ? "text" : "password"}
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        className="form-input"
                                        required
                                    />
                                    <button type="button" onClick={() => setShowCurrentPassword(!showCurrentPassword)} className="password-toggle">
                                        {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div className="grid-2">
                                <div className="form-group">
                                    <label className="form-label">New Password</label>
                                    <div className="input-password-wrapper">
                                        <input
                                            type={showNewPassword ? "text" : "password"}
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            className="form-input"
                                            required
                                        />
                                        <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="password-toggle">
                                            {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Confirm Password</label>
                                    <div className="input-password-wrapper">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="form-input"
                                            required
                                        />
                                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="password-toggle">
                                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div style={{ paddingTop: '24px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end' }}>
                                <button type="submit" disabled={passwordLoading} className="btn-red">
                                    <Lock size={16} />
                                    {passwordLoading ? "Updating..." : "Change Password"}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="alert-info">
                        <span style={{ color: '#2563eb' }}>Security Note:</span> All changes are automatically encrypted and securely stored in the ChronoQuest system. Your account security is monitored continuously. Never share your password with anyone, including administrators.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;
````

## File: chrono-dashboard/src/pages/QuestionManagement.js
````javascript
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Plus, Edit2, Trash2, X, CheckCircle, Circle } from 'lucide-react';

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3000/api/v1';

const PERIODS = [
    'Pre-colonial',
    'Spanish Colonization',
    'Revolutionary',
    'American/Japanese',
    'Post-war',
];

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

const EMPTY_FORM = {
    title: '',
    description: '',
    topic: '',
    period: '',
    difficultyLevel: 'Medium',
    options: ['', '', '', ''],
    correctAnswer: 0,
};

const getDifficultyClass = (level) => {
    switch (level) {
        case 'Easy': return 'difficulty-badge-easy';
        case 'Medium': return 'difficulty-badge-medium';
        case 'Hard': return 'difficulty-badge-hard';
        default: return 'difficulty-badge-default';
    }
};

const getPeriodClass = (period) => {
    const map = {
        'Pre-colonial': 'period-badge-precolonial',
        'Spanish Colonization': 'period-badge-spanish',
        'Revolutionary': 'period-badge-revolutionary',
        'American/Japanese': 'period-badge-american',
        'Post-war': 'period-badge-postwar',
    };
    return map[period] || 'period-badge-default';
};

const QuestionManagement = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterDifficulty, setFilterDifficulty] = useState('');
    const [filterPeriod, setFilterPeriod] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState(EMPTY_FORM);

    const fetchQuestions = useCallback(async (pageNum = 1) => {
        setLoading(true);
        setError('');
        try {
            const params = new URLSearchParams();
            if (searchTerm) params.append('topic', searchTerm);
            if (filterDifficulty) params.append('difficulty', filterDifficulty);
            if (filterPeriod) params.append('period', filterPeriod);
            params.append('page', pageNum);
            params.append('limit', 10);

            const token = localStorage.getItem('teacherToken');
            const { data } = await axios.get(
                `${API_BASE}/questions?${params.toString()}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setQuestions(data.questions);
            setTotalPages(data.pagination.pages);
            setPage(pageNum);
        } catch (err) {
            setError(err.response?.data?.message || 'Error fetching questions');
        } finally {
            setLoading(false);
        }
    }, [searchTerm, filterDifficulty, filterPeriod]);

    useEffect(() => {
        const timer = setTimeout(() => fetchQuestions(1), 300);
        return () => clearTimeout(timer);
    }, [searchTerm, filterDifficulty, filterPeriod, fetchQuestions]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleOptionChange = (index, value) => {
        setFormData(prev => {
            const options = [...prev.options];
            options[index] = value;
            return { ...prev, options };
        });
    };

    const handleCorrectAnswer = (index) => {
        setFormData(prev => ({ ...prev, correctAnswer: index }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!formData.title.trim()) return setError('Question title is required');
        if (!formData.period) return setError('Please select a historical period');
        if (formData.options.some(o => !o.trim())) return setError('All 4 answer options are required');

        try {
            const token = localStorage.getItem('teacherToken');
            const payload = { ...formData, topic: formData.period };

            if (editingId) {
                await axios.patch(`${API_BASE}/questions/${editingId}`, payload, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setSuccess('Question updated successfully');
            } else {
                await axios.post(`${API_BASE}/questions`, payload, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setSuccess('Question created successfully');
            }
            closeModal();
            fetchQuestions(page);
        } catch (err) {
            setError(err.response?.data?.message || 'Error saving question');
        }
    };

    const handleEdit = (question) => {
        setFormData({
            title: question.title || '',
            description: question.description || '',
            topic: question.topic || '',
            period: question.period || question.topic || '',
            difficultyLevel: question.difficultyLevel || 'Medium',
            options: question.options?.length === 4 ? question.options : ['', '', '', ''],
            correctAnswer: question.correctAnswer ?? 0,
        });
        setEditingId(question._id);
        setModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this question?')) return;
        try {
            const token = localStorage.getItem('teacherToken');
            await axios.delete(`${API_BASE}/questions/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setSuccess('Question deleted successfully');
            fetchQuestions(page);
        } catch (err) {
            setError(err.response?.data?.message || 'Error deleting question');
        }
    };

    const handleNewQuestion = () => {
        setFormData(EMPTY_FORM);
        setEditingId(null);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setEditingId(null);
        setFormData(EMPTY_FORM);
        setError('');
    };

    return (
        <div className="content-area space-y-8">
            <header className="flex-between">
                <h2 className="page-title">Question Management</h2>
                <button onClick={handleNewQuestion} className="btn-dark" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Plus size={16} /> New Question
                </button>
            </header>

            {error && <div className="alert-error">{error}</div>}
            {success && <div className="alert-success">{success}</div>}

            <div className="filter-bar">
                <input
                    type="text"
                    placeholder="Search by topic or title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-input-sm"
                    style={{ flex: 1, minWidth: '180px' }}
                />
                <select value={filterPeriod} onChange={(e) => setFilterPeriod(e.target.value)} className="form-select">
                    <option value="">All Periods</option>
                    {PERIODS.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
                <select value={filterDifficulty} onChange={(e) => setFilterDifficulty(e.target.value)} className="form-select">
                    <option value="">All Difficulties</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                {loading ? (
                    <div className="empty-state"><p className="empty-state-text">Loading...</p></div>
                ) : questions.length === 0 ? (
                    <div className="empty-state"><p className="empty-state-text">No questions found</p></div>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table className="table" style={{ minWidth: 'unset', width: '100%' }}>
                            <thead>
                                <tr>
                                    <th style={{ width: '45%' }}>Question</th>
                                    <th style={{ width: '20%' }}>Period</th>
                                    <th style={{ width: '15%' }}>Difficulty</th>
                                    <th style={{ width: '12%' }}>Created By</th>
                                    <th style={{ width: '8%', textAlign: 'center' }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {questions.map((question) => (
                                    <tr key={question._id}>
                                        <td>
                                            <p className="table-cell-name" style={{ fontSize: '0.875rem' }}>{question.title}</p>
                                            {question.description && (
                                                <p className="table-cell-meta" style={{ marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '320px' }}>
                                                    {question.description}
                                                </p>
                                            )}
                                        </td>
                                        <td>
                                            <span className={getPeriodClass(question.period || question.topic)}>
                                                {question.period || question.topic}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={getDifficultyClass(question.difficultyLevel)}>
                                                {question.difficultyLevel}
                                            </span>
                                        </td>
                                        <td className="table-cell-sub">{question.createdBy?.name}</td>
                                        <td>
                                            <div className="table-actions" style={{ justifyContent: 'center' }}>
                                                <button onClick={() => handleEdit(question)} className="btn-icon btn-icon-slate" title="Edit">
                                                    <Edit2 size={15} />
                                                </button>
                                                <button onClick={() => handleDelete(question._id)} className="btn-icon btn-icon-red" title="Delete">
                                                    <Trash2 size={15} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {totalPages > 1 && (
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                        <button
                            key={p}
                            onClick={() => fetchQuestions(p)}
                            className={`pagination-btn ${p === page ? 'active' : 'inactive'}`}
                        >
                            {p}
                        </button>
                    ))}
                </div>
            )}

            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal-lg">
                        <div className="modal-header">
                            <h2 className="section-title">{editingId ? 'Edit Question' : 'New Question'}</h2>
                            <button onClick={closeModal} className="btn-icon btn-icon-slate">
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="modal-body space-y-6" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
                            {error && <div className="alert-error">{error}</div>}

                            <div className="form-group">
                                <label className="form-label">
                                    Question <span style={{ color: '#f87171' }}>*</span>
                                </label>
                                <textarea
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    rows={2}
                                    className="form-textarea-sm"
                                    placeholder="Type your question here..."
                                />
                            </div>

                            <div className="grid-2">
                                <div className="form-group">
                                    <label className="form-label">
                                        Historical Period <span style={{ color: '#f87171' }}>*</span>
                                    </label>
                                    <select name="period" value={formData.period} onChange={handleInputChange} className="form-select">
                                        <option value="">Select period...</option>
                                        {PERIODS.map(p => <option key={p} value={p}>{p}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Difficulty</label>
                                    <select name="difficultyLevel" value={formData.difficultyLevel} onChange={handleInputChange} className="form-select">
                                        <option value="Easy">Easy</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Hard">Hard</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Answer Options <span style={{ color: '#f87171' }}>*</span>
                                    <span style={{ marginLeft: '8px', color: '#94a3b8', fontWeight: 600, textTransform: 'none', letterSpacing: 'normal' }}>
                                        — click the circle to mark the correct answer
                                    </span>
                                </label>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {formData.options.map((opt, i) => {
                                        const isCorrect = formData.correctAnswer === i;
                                        return (
                                            <div key={i} className={`question-answer-option ${isCorrect ? 'selected' : 'unselected'}`}>
                                                <button
                                                    type="button"
                                                    onClick={() => handleCorrectAnswer(i)}
                                                    className={`option-selector-btn ${isCorrect ? 'selected' : 'unselected'}`}
                                                    title="Mark as correct answer"
                                                >
                                                    {isCorrect ? <CheckCircle size={20} /> : <Circle size={20} />}
                                                </button>
                                                <span className={`option-prefix ${isCorrect ? 'selected' : 'unselected'}`}>
                                                    {OPTION_LABELS[i]}.
                                                </span>
                                                <input
                                                    type="text"
                                                    value={opt}
                                                    onChange={(e) => handleOptionChange(i, e.target.value)}
                                                    className="option-text-input"
                                                    placeholder={`Option ${OPTION_LABELS[i]}...`}
                                                />
                                                {isCorrect && <span className="option-correct-label">Correct</span>}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Additional Notes <span style={{ color: '#94a3b8', fontWeight: 600, textTransform: 'none', letterSpacing: 'normal' }}>(optional)</span>
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows={2}
                                    className="form-textarea-sm"
                                    placeholder="Any extra context or explanation..."
                                />
                            </div>

                            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', paddingTop: '8px' }}>
                                <button type="button" onClick={closeModal} className="btn-outline">Cancel</button>
                                <button type="submit" className="btn-dark">
                                    {editingId ? 'Update Question' : 'Create Question'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuestionManagement;
````

## File: chrono-dashboard/src/pages/RegisterPage.js
````javascript
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';

const RegisterPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await axios.post('http://localhost:3000/api/v1/auth/register', formData);
            toast.success("Account created successfully! Please login.");
            setTimeout(() => navigate('/login'), 1500);
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="page-centered">
            <Toaster position="top-right" />

            <div className="auth-wrapper">
                <div className="auth-brand">
                    <h1 className="auth-brand-title">ChronoQuest</h1>
                    <p className="auth-brand-subtitle">Instructor Portal</p>
                </div>

                <div className="auth-card">
                    <h2 className="auth-card-title">Create Account</h2>

                    <form onSubmit={handleRegister} className="form-stack">
                        <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                value={formData.name}
                                className="form-input"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                placeholder="your.email@school.com"
                                value={formData.email}
                                className="form-input"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <div className="input-password-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a password"
                                    value={formData.password}
                                    className="form-input"
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="password-toggle"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button type="submit" disabled={isLoading} className="btn-primary">
                            {isLoading ? "Creating Account..." : "Create Account"}
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p className="auth-footer-text">
                            Already have an account?{' '}
                            <Link to="/login" className="auth-footer-link">Sign In</Link>
                        </p>
                    </div>
                </div>

                <div className="auth-security-note">
                    <p className="auth-security-text">Secure & Encrypted</p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
````

## File: chrono-dashboard/src/reportWebVitals.js
````javascript
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
````

## File: chrono-dashboard/src/setupTests.js
````javascript
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
````

## File: chronoquest-api/package.json
````json
{
  "name": "chronoquest-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "cors": "^2.8.6",
    "dotenv": "^17.4.0",
    "express": "^5.2.1",
    "express-rate-limit": "^8.3.2",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^9.4.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.14"
  }
}
````

## File: chronoquest-api/server.js
````javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const apiRoutes = require('./src/routes/apiRoutes');

dotenv.config();
const app = express();

app.use(cors({
    origin: "http://localhost:3001",
    credentials: true
}));

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/api/v1/debug', (req, res) => {
    res.json({ message: "Server is alive!", dbStatus: mongoose.connection.readyState });
});

app.use('/api/v1', apiRoutes);

const PORT = 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/chronoquest';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log(`✅ MongoDB Connected`);
        app.listen(PORT, () => {
            console.log(`🚀 Server: http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('❌ MongoDB Error:', err.message);
        process.exit(1);
    });
````

## File: chronoquest-api/src/config/db.js
````javascript
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
````

## File: chronoquest-api/src/controllers/adminController.js
````javascript
const Teacher = require('../models/teacherModel');
const Student = require('../models/studentModel');
const ActivityLog = require('../models/activityLogModel');
const Feedback = require('../models/feedbackModel');
const SystemSettings = require('../models/systemSettingsModel');

// ============================================
// USER MANAGEMENT
// ============================================

exports.getAllUsers = async (req, res) => {
    try {
        const teachers = await Teacher.find().select('-password');
        const students = await Student.find().select('-password');

        const formattedTeachers = teachers.map(t => ({
            ...t.toObject(),
            userType: 'teacher',
            totalSections: t.sections?.length || 0
        }));

        const formattedStudents = students.map(s => ({
            ...s.toObject(),
            userType: 'student'
        }));

        res.json({
            teachers: formattedTeachers,
            students: formattedStudents,
            totalUsers: formattedTeachers.length + formattedStudents.length,
            totalTeachers: formattedTeachers.length,
            totalStudents: formattedStudents.length
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

exports.deactivateUser = async (req, res) => {
    try {
        const { userId, userType } = req.body;

        if (userType === 'teacher') {
            await Teacher.findByIdAndUpdate(userId, { isActive: false });
            await ActivityLog.create({
                userId: req.user._id,
                userRole: req.user.role,
                action: 'DEACTIVATE_TEACHER',
                resourceId: userId,
                status: 'success'
            });
        } else if (userType === 'student') {
            // For students, we might disable their account or just mark as inactive
            await Student.findByIdAndUpdate(userId, { active: false }, { new: true });
            await ActivityLog.create({
                userId: req.user._id,
                userRole: req.user.role,
                action: 'DEACTIVATE_STUDENT',
                resourceId: userId,
                status: 'success'
            });
        }

        res.json({ message: `User deactivated successfully` });
    } catch (error) {
        res.status(500).json({ message: 'Error deactivating user', error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { userId, userType } = req.body;

        if (userType === 'teacher') {
            await Teacher.findByIdAndDelete(userId);
        } else if (userType === 'student') {
            await Student.findByIdAndDelete(userId);
        }

        await ActivityLog.create({
            userId: req.user._id,
            userRole: req.user.role,
            action: 'DELETE_USER',
            resource: userType,
            resourceId: userId,
            status: 'success'
        });

        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        // Only super admin can update users
        if (req.user.adminLevel !== 'super_admin') {
            return res.status(403).json({ message: 'Only super admin can update users' });
        }

        const { userId, userType } = req.params;
        const { name, email, role, adminLevel } = req.body;

        if (userType === 'teacher') {
            // Validate email uniqueness if provided
            if (email) {
                const existingTeacher = await Teacher.findOne({ email, _id: { $ne: userId } });
                if (existingTeacher) {
                    return res.status(400).json({ message: 'Email already in use' });
                }
            }

            // Validate role if provided
            if (role && !['teacher', 'admin'].includes(role)) {
                return res.status(400).json({ message: 'Invalid role' });
            }

            // Validate adminLevel if role is being set to admin
            if (role === 'admin' && adminLevel) {
                if (!['super_admin', 'content_admin', 'support_admin'].includes(adminLevel)) {
                    return res.status(400).json({ message: 'Invalid admin level' });
                }
            }

            const updateData = {};
            if (name) updateData.name = name;
            if (email) updateData.email = email;
            if (role) updateData.role = role;
            if (role === 'admin' && adminLevel) updateData.adminLevel = adminLevel;
            if (role === 'teacher') updateData.adminLevel = null; // Clear admin level if downgrading

            const updatedTeacher = await Teacher.findByIdAndUpdate(
                userId,
                updateData,
                { new: true }
            ).select('-password');

            // Log the action
            await ActivityLog.create({
                userId: req.user._id,
                userRole: req.user.role,
                action: 'UPDATE_USER',
                resource: 'teacher',
                resourceId: userId,
                details: { changedFields: Object.keys(updateData) },
                status: 'success'
            });

            res.json({
                message: 'User updated successfully',
                user: updatedTeacher
            });
        } else if (userType === 'student') {
            // Validate email uniqueness if provided
            if (email) {
                const existingStudent = await Student.findOne({ email, _id: { $ne: userId } });
                if (existingStudent) {
                    return res.status(400).json({ message: 'Email already in use' });
                }
            }

            const updateData = {};
            if (name) updateData.name = name;
            if (email) updateData.email = email;

            const updatedStudent = await Student.findByIdAndUpdate(
                userId,
                updateData,
                { new: true }
            ).select('-password');

            // Log the action
            await ActivityLog.create({
                userId: req.user._id,
                userRole: req.user.role,
                action: 'UPDATE_USER',
                resource: 'student',
                resourceId: userId,
                details: { changedFields: Object.keys(updateData) },
                status: 'success'
            });

            res.json({
                message: 'User updated successfully',
                user: updatedStudent
            });
        } else {
            res.status(400).json({ message: 'Invalid user type' });
        }
    } catch (error) {
        console.error('Update User Error:', error);
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

exports.getUserActivityLogs = async (req, res) => {
    try {
        const { userId } = req.params;
        const logs = await ActivityLog.find({ userId })
            .sort({ createdAt: -1 })
            .limit(100);

        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching activity logs', error: error.message });
    }
};

exports.getAllActivityLogs = async (req, res) => {
    try {
        const { limit = 500, skip = 0 } = req.query;
        const logs = await ActivityLog.find()
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip(parseInt(skip));

        const total = await ActivityLog.countDocuments();

        res.json({ logs, total });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching logs', error: error.message });
    }
};

// ============================================
// SYSTEM ANALYTICS
// ============================================

exports.getSystemAnalytics = async (req, res) => {
    try {
        const totalTeachers = await Teacher.countDocuments({ role: 'teacher', isActive: true });
        const totalStudents = await Student.countDocuments();
        const totalSections = await Teacher.aggregate([
            { $match: { isActive: true } },
            { $unwind: '$sections' },
            { $count: 'total' }
        ]);

        const recentUsers = await Teacher.find()
            .sort({ createdAt: -1 })
            .limit(10)
            .select('name email createdAt');

        const platformStats = {
            totalTeachers,
            totalStudents,
            totalSections: totalSections[0]?.total || 0,
            totalUsers: totalTeachers + totalStudents,
            avgStudentsPerTeacher: totalTeachers > 0 ? (totalStudents / totalTeachers).toFixed(2) : 0,
            recentUsers
        };

        res.json(platformStats);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching analytics', error: error.message });
    }
};

exports.getUsageStats = async (req, res) => {
    try {
        const logs = await ActivityLog.aggregate([
            {
                $group: {
                    _id: '$action',
                    count: { $sum: 1 }
                }
            },
            { $sort: { count: -1 } }
        ]);

        const dailyActivity = await ActivityLog.aggregate([
            {
                $group: {
                    _id: {
                        $dateToString: { format: '%Y-%m-%d', date: '$createdAt' }
                    },
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: -1 } },
            { $limit: 30 }
        ]);

        res.json({ actionStats: logs, dailyActivity });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching usage stats', error: error.message });
    }
};

// ============================================
// FEEDBACK & SUPPORT
// ============================================

exports.getAllFeedback = async (req, res) => {
    try {
        const { status, type } = req.query;
        const filter = {};

        if (status) filter.status = status;
        if (type) filter.type = type;

        const feedback = await Feedback.find(filter)
            .populate('submittedBy', 'name email')
            .populate('response.admin', 'name email')
            .sort({ createdAt: -1 });

        res.json(feedback);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching feedback', error: error.message });
    }
};

exports.respondToFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const { message, status } = req.body;

        const feedback = await Feedback.findByIdAndUpdate(
            id,
            {
                'response.admin': req.user._id,
                'response.message': message,
                'response.respondedAt': new Date(),
                status: status || 'in_progress'
            },
            { new: true }
        ).populate('submittedBy', 'name email')
            .populate('response.admin', 'name email');

        await ActivityLog.create({
            userId: req.user._id,
            userRole: req.user.role,
            action: 'RESPOND_FEEDBACK',
            resourceId: id,
            status: 'success'
        });

        res.json({ message: 'Feedback responded successfully', feedback });
    } catch (error) {
        res.status(500).json({ message: 'Error responding to feedback', error: error.message });
    }
};

// ============================================
// SYSTEM SETTINGS
// ============================================

exports.getSystemSettings = async (req, res) => {
    try {
        const settings = await SystemSettings.find();
        const settingsObj = {};

        settings.forEach(s => {
            settingsObj[s.key] = {
                value: s.value,
                type: s.type,
                description: s.description,
                category: s.category
            };
        });

        res.json(settingsObj);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching settings', error: error.message });
    }
};

exports.updateSystemSetting = async (req, res) => {
    try {
        const { key, value, type = 'string' } = req.body;

        const setting = await SystemSettings.findOneAndUpdate(
            { key },
            {
                key,
                value,
                type,
                updatedBy: req.user._id,
                updatedAt: new Date()
            },
            { upsert: true, new: true }
        );

        await ActivityLog.create({
            userId: req.user._id,
            userRole: req.user.role,
            action: 'UPDATE_SETTING',
            details: { key, oldValue: setting.value, newValue: value },
            status: 'success'
        });

        res.json({ message: 'Setting updated successfully', setting });
    } catch (error) {
        res.status(500).json({ message: 'Error updating setting', error: error.message });
    }
};

// ============================================
// SCORE MANAGEMENT & LEADERBOARD
// ============================================

exports.syncScores = async (req, res) => {
    try {
        const Score = require('../models/scoreModel');
        // Sync ALL students (including score: 0) for initial leaderboard population
        const students = await Student.find({});

        if (students.length === 0) {
            return res.json({ message: 'No students to sync', synced: 0 });
        }

        let syncedCount = 0;
        const syncErrors = [];

        for (const student of students) {
            try {
                // Check if score already exists for this student
                const existingScore = await Score.findOne({
                    studentName: student.name,
                    classCode: student.classCode
                });

                if (!existingScore) {
                    // Get teacher data for this student's class
                    const teacher = await Teacher.findOne({
                        sections: { $elemMatch: { classCode: student.classCode } }
                    });

                    if (teacher) {
                        await Score.create({
                            studentName: student.name,
                            classCode: student.classCode,
                            levelReached: student.levelReached,
                            score: Math.min(student.score, 100), // Ensure max 100
                            teacherId: teacher._id
                        });
                        syncedCount++;
                    }
                }
            } catch (error) {
                syncErrors.push(`Failed to sync ${student.name}: ${error.message}`);
            }
        }

        await ActivityLog.create({
            userId: req.user._id,
            userRole: req.user.role,
            action: 'SYNC_SCORES',
            details: { totalAttempted: students.length, successfulSync: syncedCount },
            status: syncErrors.length === 0 ? 'success' : 'partial'
        });

        res.json({
            message: 'Score sync completed',
            synced: syncedCount,
            total: students.length,
            errors: syncErrors.length > 0 ? syncErrors : null
        });
    } catch (error) {
        res.status(500).json({ message: 'Error syncing scores', error: error.message });
    }
};

exports.getRecentActivityLogs = async (req, res) => {
    try {
        const { limit = 50 } = req.query;

        const logs = await ActivityLog.aggregate([
            { $sort: { createdAt: -1 } },
            { $limit: parseInt(limit) },
            {
                $lookup: {
                    from: 'teachers',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'userDetails'
                }
            },
            {
                $lookup: {
                    from: 'students',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'studentDetails'
                }
            },
            {
                $project: {
                    _id: 1,
                    userId: 1,
                    action: 1,
                    resource: 1,
                    resourceId: 1,
                    details: 1,
                    status: 1,
                    createdAt: 1,
                    userName: {
                        $cond: [
                            { $gt: [{ $size: '$userDetails' }, 0] },
                            { $arrayElemAt: ['$userDetails.name', 0] },
                            { $arrayElemAt: ['$studentDetails.name', 0] }
                        ]
                    },
                    userEmail: {
                        $cond: [
                            { $gt: [{ $size: '$userDetails' }, 0] },
                            { $arrayElemAt: ['$userDetails.email', 0] },
                            { $arrayElemAt: ['$studentDetails.email', 0] }
                        ]
                    }
                }
            }
        ]);

        res.json({
            logs,
            total: logs.length,
            timestamp: new Date()
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching activity logs', error: error.message });
    }
};
````

## File: chronoquest-api/src/controllers/analyticsController.js
````javascript
const Score = require('../models/scoreModel');

exports.getClassProgress = async (req, res) => {
    try {
        // Find all scores where teacherId matches the logged-in teacher
        const progress = await Score.find({ teacherId: req.user.id })
            .sort({ createdAt: -1 }); // Latest sync first

        res.status(200).json(progress);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getStudentPerformance = async (req, res) => {
    try {
        const { studentName } = req.params;
        const performance = await Score.find({
            teacherId: req.user.id,
            studentName: studentName
        });

        res.status(200).json(performance);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
````

## File: chronoquest-api/src/controllers/authController.js
````javascript
const Teacher = require('../models/teacherModel');
const Feedback = require('../models/feedbackModel');
const jwt = require('jsonwebtoken');

// Helper to generate JWT
const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// @desc    Register a new teacher
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const teacherExists = await Teacher.findOne({ email });
        if (teacherExists) {
            return res.status(400).json({ message: 'Teacher already exists' });
        }

        const generatedCode = Math.random().toString(36).substring(2, 8).toUpperCase();

        const teacher = await Teacher.create({
            name,
            email,
            password,
            classCode: generatedCode,
            sections: []
        });

        res.status(201).json({
            _id: teacher._id,
            name: teacher.name,
            email: teacher.email,
            classCode: teacher.classCode,
            sections: teacher.sections,
            role: 'teacher',
            token: generateToken(teacher._id, 'teacher')
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// @desc    Authenticate teacher & get token
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const teacher = await Teacher.findOne({ email });

        if (teacher && (await teacher.matchPassword(password))) {
            res.json({
                _id: teacher._id,
                name: teacher.name,
                email: teacher.email,
                classCode: teacher.classCode,
                sections: teacher.sections,
                role: teacher.role,
                token: generateToken(teacher._id, teacher.role)
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// @desc    Get teacher profile
exports.getTeacherProfile = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.user._id);
        if (teacher) {
            res.json({
                _id: teacher._id,
                name: teacher.name,
                email: teacher.email,
                classCode: teacher.classCode,
                sections: teacher.sections,
                role: teacher.role
            });
        } else {
            res.status(404).json({ message: 'Teacher not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// @desc    Update teacher profile
exports.updateTeacherProfile = async (req, res) => {
    try {
        const { name, email } = req.body;
        const teacher = await Teacher.findById(req.user._id);

        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        if (name) teacher.name = name;
        if (email) {
            const emailExists = await Teacher.findOne({ email, _id: { $ne: req.user._id } });
            if (emailExists) {
                return res.status(400).json({ message: 'Email already in use' });
            }
            teacher.email = email;
        }

        await teacher.save();

        res.json({
            _id: teacher._id,
            name: teacher.name,
            email: teacher.email,
            classCode: teacher.classCode,
            sections: teacher.sections,
            role: 'teacher'
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Replace your deleteSection function with this:
exports.deleteSection = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.user._id);
        if (teacher) {
            // Filter using classCode (or whatever identifier you send from frontend)
            teacher.sections = teacher.sections.filter(
                (section) => section.classCode !== req.params.sectionId
            );

            await teacher.save();

            // Return the updated teacher object so the frontend can sync
            res.json({
                _id: teacher._id,
                name: teacher.name,
                email: teacher.email,
                classCode: teacher.classCode,
                sections: teacher.sections,
                role: 'teacher'
            });
        } else {
            res.status(404).json({ message: 'Teacher not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// @desc    Submit feedback
exports.submitFeedback = async (req, res) => {
    try {
        const { title, description, type, priority } = req.body;
        const teacherId = req.user._id;

        if (!title || !description || !type) {
            return res.status(400).json({ message: 'Title, description, and type are required' });
        }

        const teacher = await Teacher.findById(teacherId).select('email');
        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        const feedback = await Feedback.create({
            title,
            description,
            type,
            submittedBy: teacherId,
            email: teacher.email,
            priority: priority || 'medium',
            status: 'open'
        });

        res.status(201).json({
            message: 'Feedback submitted successfully',
            feedback
        });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting feedback', error: error.message });
    }
};
````

## File: chronoquest-api/src/controllers/questionController.js
````javascript
const Question = require('../models/questionModel');

// @desc    Create a new question
// @access  Private/Admin
exports.createQuestion = async (req, res) => {
    try {
        const { title, description, topic, difficultyLevel } = req.body;

        // Validation
        if (!title || !topic) {
            return res.status(400).json({ message: 'Title and topic are required' });
        }

        const newQuestion = new Question({
            title,
            description,
            topic,
            difficultyLevel: difficultyLevel || 'Medium',
            createdBy: req.user._id
        });

        await newQuestion.save();

        res.status(201).json({
            message: 'Question created successfully',
            question: newQuestion
        });
    } catch (error) {
        console.error('Create Question Error:', error);
        res.status(500).json({ message: 'Error creating question' });
    }
};

// @desc    Get all questions with optional filters
// @access  Private/Admin
exports.getAllQuestions = async (req, res) => {
    try {
        const { topic, difficulty, isActive, page = 1, limit = 10 } = req.query;

        const filters = {};
        if (topic) filters.topic = { $regex: topic, $options: 'i' };
        if (difficulty) filters.difficultyLevel = difficulty;
        if (isActive !== undefined) filters.isActive = isActive === 'true';

        const skip = (page - 1) * limit;

        const questions = await Question.find(filters)
            .populate('createdBy', 'name email')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Question.countDocuments(filters);

        res.json({
            questions,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Get All Questions Error:', error);
        res.status(500).json({ message: 'Error fetching questions' });
    }
};

// @desc    Get questions created by a specific teacher
// @access  Private/Admin
exports.getQuestionsByTeacher = async (req, res) => {
    try {
        const { teacherId } = req.params;
        const { page = 1, limit = 10 } = req.query;

        const skip = (page - 1) * limit;

        const questions = await Question.find({ createdBy: teacherId })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(parseInt(limit));

        const total = await Question.countDocuments({ createdBy: teacherId });

        res.json({
            questions,
            pagination: {
                total,
                page: parseInt(page),
                limit: parseInt(limit),
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Get Questions by Teacher Error:', error);
        res.status(500).json({ message: 'Error fetching teacher questions' });
    }
};

// @desc    Update a question
// @access  Private/Admin
exports.updateQuestion = async (req, res) => {
    try {
        const { questionId } = req.params;
        const { title, description, topic, difficultyLevel, isActive } = req.body;

        const question = await Question.findById(questionId);

        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        // Verify ownership (only creator or admin can edit)
        if (question.createdBy.toString() !== req.user._id && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to update this question' });
        }

        // Update fields
        if (title) question.title = title;
        if (description !== undefined) question.description = description;
        if (topic) question.topic = topic;
        if (difficultyLevel) question.difficultyLevel = difficultyLevel;
        if (isActive !== undefined) question.isActive = isActive;

        await question.save();

        res.json({
            message: 'Question updated successfully',
            question
        });
    } catch (error) {
        console.error('Update Question Error:', error);
        res.status(500).json({ message: 'Error updating question' });
    }
};

// @desc    Delete a question
// @access  Private/Admin
exports.deleteQuestion = async (req, res) => {
    try {
        const { questionId } = req.params;

        const question = await Question.findById(questionId);

        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        // Verify ownership (only creator or admin can delete)
        if (question.createdBy.toString() !== req.user._id && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to delete this question' });
        }

        await Question.findByIdAndDelete(questionId);

        res.json({ message: 'Question deleted successfully' });
    } catch (error) {
        console.error('Delete Question Error:', error);
        res.status(500).json({ message: 'Error deleting question' });
    }
};

// @desc    Toggle question active status
// @access  Private/Admin
exports.toggleQuestionStatus = async (req, res) => {
    try {
        const { questionId } = req.params;

        const question = await Question.findById(questionId);

        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        // Verify ownership
        if (question.createdBy.toString() !== req.user._id && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized to modify this question' });
        }

        question.isActive = !question.isActive;
        await question.save();

        res.json({
            message: `Question ${question.isActive ? 'activated' : 'deactivated'} successfully`,
            question
        });
    } catch (error) {
        console.error('Toggle Question Status Error:', error);
        res.status(500).json({ message: 'Error toggling question status' });
    }
};
````

## File: chronoquest-api/src/controllers/studentController.js
````javascript
const Score = require('../models/scoreModel');
const Teacher = require('../models/teacherModel');

exports.simulateSync = async (req, res) => {
    try {
        const { studentName, classCode, levelReached, score } = req.body;

        const teacher = await Teacher.findOne({ classCode });
        if (!teacher) {
            return res.status(404).json({ message: 'Invalid Class Code' });
        }

        const newScore = await Score.create({
            studentName,
            classCode,
            levelReached,
            score,
            teacherId: teacher._id
        });

        res.status(201).json({ message: 'Sync Successful', data: newScore });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
````

## File: chronoquest-api/src/middleware/adminMiddleware.js
````javascript
const jwt = require('jsonwebtoken');
const Teacher = require('../models/teacherModel');

exports.protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ message: "Not authorized to access this route" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        req.user = await Teacher.findById(decoded.id);

        if (!req.user) {
            return res.status(404).json({ message: "User not found" });
        }

        next();
    } catch (error) {
        res.status(401).json({ message: "Not authorized to access this route" });
    }
};

exports.adminOnly = async (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({
            message: "Access denied. Admin privileges required.",
            userRole: req.user.role
        });
    }
    next();
};

exports.checkPermission = (requiredPermission) => {
    return async (req, res, next) => {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: "Admin access required" });
        }

        if (req.user.permissions && !req.user.permissions.includes(requiredPermission)) {
            return res.status(403).json({
                message: `Permission denied. Required: ${requiredPermission}`,
                userPermissions: req.user.permissions
            });
        }

        next();
    };
};
````

## File: chronoquest-api/src/middleware/authMiddleware.js
````javascript
const jwt = require('jsonwebtoken');
const Teacher = require('../models/teacherModel');

exports.protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await Teacher.findById(decoded.id).select('-password');

        if (!req.user) {
            return res.status(401).json({ message: 'User not found' });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: `Not authorized, token failed: ${error.message}` });
    }
};

// Admin-only middleware
exports.adminOnly = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Access denied: Admin privileges required' });
    }
};
````

## File: chronoquest-api/src/models/activityLogModel.js
````javascript
const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    userRole: {
        type: String,
        enum: ['teacher', 'student', 'admin'],
        required: true
    },
    action: {
        type: String,
        required: true  // e.g., "LOGIN", "CREATE_SECTION", "DELETE_STUDENT"
    },
    resource: {
        type: String  // e.g., "Section", "Student", "Question"
    },
    resourceId: {
        type: mongoose.Schema.Types.ObjectId
    },
    details: {
        type: Object,
        default: {}  // Store additional context
    },
    ipAddress: String,
    status: {
        type: String,
        enum: ['success', 'failure'],
        default: 'success'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: true
    }
}, { timestamps: false });

module.exports = mongoose.model('ActivityLog', activityLogSchema);
````

## File: chronoquest-api/src/models/feedbackModel.js
````javascript
const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['bug_report', 'feature_request', 'general_feedback'],
        required: true
    },
    submittedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    email: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high', 'critical'],
        default: 'medium'
    },
    status: {
        type: String,
        enum: ['open', 'in_progress', 'resolved', 'closed'],
        default: 'open'
    },
    attachments: [String],  // URLs to attached files/screenshots
    response: {
        admin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Teacher'
        },
        message: String,
        respondedAt: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
````

## File: chronoquest-api/src/models/questionModel.js
````javascript
const mongoose = require('mongoose');

const PERIODS = [
    'Pre-colonial',
    'Spanish Colonization',
    'Revolutionary',
    'American/Japanese',
    'Post-war',
];

const questionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            minlength: 5,
            maxlength: 500
        },
        description: {
            type: String,
            trim: true,
            maxlength: 1000
        },
        // Backward compatibility field
        topic: {
            type: String,
            trim: true,
            index: true
        },
        period: {
            type: String,
            enum: PERIODS,
            required: true,
            index: true
        },
        options: {
            type: [String],
            validate: {
                validator: (arr) => arr.length === 4 && arr.every(s => s.trim().length > 0),
                message: 'Exactly 4 non-empty options are required'
            },
            required: true
        },
        // Correct answer index (0-3)
        correctAnswer: {
            type: Number,
            enum: [0, 1, 2, 3],
            required: true,
            default: 0
        },
        difficultyLevel: {
            type: String,
            enum: ['Easy', 'Medium', 'Hard'],
            default: 'Medium',
            required: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Teacher',
            required: true,
            index: true
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

// Sync topic → period for backward compat
questionSchema.pre('save', function (next) {
    if (this.period) this.topic = this.period;
    next();
});

questionSchema.index({ createdBy: 1, period: 1 });
questionSchema.index({ createdBy: 1, isActive: 1 });

module.exports = mongoose.model('Question', questionSchema);
````

## File: chronoquest-api/src/models/scoreModel.js
````javascript
const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    classCode: { type: String, required: true },
    levelReached: { type: String, required: true },
    score: { type: Number, required: true },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Score', scoreSchema);
````

## File: chronoquest-api/src/models/studentModel.js
````javascript
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    classCode: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0,
        max: 100
    },
    levelReached: {
        type: String,
        default: "Era 1: Prehistoric"
    }
}, { timestamps: true });

// Pre-save hook to clamp score to 100
studentSchema.pre('save', function (next) {
    if (this.score > 100) {
        this.score = 100;
    }
    next();
});

module.exports = mongoose.model('Student', studentSchema);
````

## File: chronoquest-api/src/models/systemSettingsModel.js
````javascript
const mongoose = require('mongoose');

const systemSettingsSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true
        // e.g., "max_sections_per_teacher", "max_students_per_section"
    },
    value: mongoose.Schema.Types.Mixed,  // Can be string, number, boolean, etc.
    type: {
        type: String,
        enum: ['string', 'number', 'boolean', 'json'],
        default: 'string'
    },
    description: String,
    category: {
        type: String,
        enum: ['general', 'security', 'performance', 'email', 'features'],
        default: 'general'
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('SystemSettings', systemSettingsSchema);
````

## File: chronoquest-api/src/models/teacherModel.js
````javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// 1. Define the Section Structure
const sectionSchema = new mongoose.Schema({
    sectionName: {
        type: String,
        required: true
    },
    classCode: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isArchived: {
        type: Boolean,
        default: false
    },
    archivedAt: {
        type: Date,
        default: null
    }
});

// 2. Define the Teacher Structure
const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    classCode: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        enum: ['teacher', 'admin'],
        default: 'teacher'
    },
    // Allows one teacher to have multiple sections
    sections: [sectionSchema],
    // Admin-specific fields
    adminLevel: {
        type: String,
        enum: ['super_admin', 'content_admin', 'support_admin'],
        default: null
    },
    permissions: [{
        type: String
        // e.g., 'manage_users', 'manage_content', 'view_analytics', 'manage_feedback'
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    lastLogin: {
        type: Date
    }
}, { timestamps: true });

// --- PASSWORD HASHING LOGIC ---
teacherSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        return;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// --- PASSWORD COMPARISON LOGIC ---
teacherSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('Teacher', teacherSchema);
````

## File: chronoquest-api/src/routes/adminRoutes.js
````javascript
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { protect, adminOnly, checkPermission } = require('../middleware/adminMiddleware');

// All admin routes require authentication and admin role
router.use(protect);
router.use(adminOnly);

// ============================================
// USER MANAGEMENT ROUTES
// ============================================

router.get('/users', adminController.getAllUsers);
router.post('/users/deactivate', adminController.deactivateUser);
router.patch('/users/:userId/:userType', adminController.updateUser);
router.delete('/users/:userId', adminController.deleteUser);
router.get('/users/:userId/logs', adminController.getUserActivityLogs);
router.get('/activity-logs', adminController.getAllActivityLogs);
router.get('/activity-logs-detailed', adminController.getRecentActivityLogs);

// ============================================
// SYSTEM ANALYTICS ROUTES
// ============================================

router.post('/sync-scores', adminController.syncScores);
router.get('/analytics', adminController.getSystemAnalytics);
router.get('/usage-stats', adminController.getUsageStats);

// ============================================
// FEEDBACK & SUPPORT
// ============================================

router.get('/feedback', adminController.getAllFeedback);
router.post('/feedback/:id/respond', checkPermission('manage_feedback'), adminController.respondToFeedback);

// ============================================
// SYSTEM SETTINGS
// ============================================

router.get('/settings', adminController.getSystemSettings);
router.post('/settings', checkPermission('manage_settings'), adminController.updateSystemSetting);

module.exports = router;
````

## File: chronoquest-api/src/routes/apiRoutes.js
````javascript
const express = require('express');
const router = express.Router();

// 1. IMPORT MODELS
const Teacher = require('../models/teacherModel');
const Student = require('../models/studentModel');

// 2. IMPORT MIDDLEWARE & UTILS
const { protect } = require('../middleware/authMiddleware');
const generateClassCode = require('../utils/generateCode');

// 3. IMPORT SUB-ROUTES (Ensure these files exist in the same folder!)
const authRoutes = require('./authRoutes');
const adminRoutes = require('./adminRoutes');
const questionRoutes = require('./questionRoutes');

// --- DIAGNOSTIC ROUTE ---
router.get('/test', (req, res) => res.json({ message: "API is working on Port 5000!" }));

// --- 4. AUTHENTICATION ROUTES ---
router.use('/auth', authRoutes);

// --- 4.5. ADMIN ROUTES ---
router.use('/admin', adminRoutes);

// --- 4.6. QUESTION ROUTES ---
router.use('/questions', questionRoutes);

// --- 5. SECTION MANAGEMENT ---

// @route   POST /api/v1/teacher/add-section
router.post('/teacher/add-section', protect, async (req, res) => {
    const { sectionName } = req.body;

    if (!sectionName) {
        return res.status(400).json({ message: "Section name is required" });
    }

    try {
        const teacherId = req.user._id;
        const newClassCode = generateClassCode();

        const newSection = {
            sectionName,
            classCode: newClassCode
        };

        const updatedTeacher = await Teacher.findByIdAndUpdate(
            teacherId,
            { $push: { sections: newSection } },
            { new: true }
        ).select('-password');

        res.status(201).json({
            updatedTeacher,
            newSection
        });
    } catch (error) {
        console.error("Add Section Error:", error);
        res.status(500).json({ message: "Server error adding section" });
    }
});

// @route   DELETE /api/v1/teacher/delete-section/:classCode
router.delete('/teacher/delete-section/:classCode', protect, async (req, res) => {
    try {
        const { classCode } = req.params;
        const teacherId = req.user._id;

        const updatedTeacher = await Teacher.findByIdAndUpdate(
            teacherId,
            { $pull: { sections: { classCode: classCode } } },
            { new: true }
        ).select('-password');

        res.json({ updatedTeacher, message: "Section removed" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting section" });
    }
});

// @route   POST /api/v1/teacher/archive-section/:classCode
router.post('/teacher/archive-section/:classCode', protect, async (req, res) => {
    try {
        const { classCode } = req.params;
        const teacherId = req.user._id;

        const teacher = await Teacher.findById(teacherId);

        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        const sectionIndex = teacher.sections.findIndex(s => s.classCode === classCode);

        if (sectionIndex === -1) {
            return res.status(403).json({ message: 'Section not found in your classes' });
        }

        teacher.sections[sectionIndex].isArchived = true;
        teacher.sections[sectionIndex].archivedAt = new Date();

        await teacher.save();

        const updatedTeacher = await Teacher.findById(teacherId).select('-password');
        res.json({ updatedTeacher, message: "Section archived successfully" });
    } catch (error) {
        console.error("Archive Section Error:", error);
        res.status(500).json({ message: "Error archiving section" });
    }
});

// @route   POST /api/v1/teacher/unarchive-section/:classCode
router.post('/teacher/unarchive-section/:classCode', protect, async (req, res) => {
    try {
        const { classCode } = req.params;
        const teacherId = req.user._id;

        const teacher = await Teacher.findById(teacherId);

        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        const sectionIndex = teacher.sections.findIndex(s => s.classCode === classCode);

        if (sectionIndex === -1) {
            return res.status(403).json({ message: 'Section not found in your classes' });
        }

        teacher.sections[sectionIndex].isArchived = false;
        teacher.sections[sectionIndex].archivedAt = null;

        await teacher.save();

        const updatedTeacher = await Teacher.findById(teacherId).select('-password');
        res.json({ updatedTeacher, message: "Section restored successfully" });
    } catch (error) {
        console.error("Unarchive Section Error:", error);
        res.status(500).json({ message: "Error restoring section" });
    }
});

// --- 6. ANALYTICS ROUTES ---

// @route   GET /api/v1/analytics/overall
router.get('/analytics/overall', protect, async (req, res) => {
    try {
        if (!req.user.sections || req.user.sections.length === 0) {
            return res.json([]);
        }

        const includeArchived = req.query.includeArchived === 'true';

        const activeSections = includeArchived
            ? req.user.sections
            : req.user.sections.filter(s => !s.isArchived);

        if (activeSections.length === 0) {
            return res.json([]);
        }

        const codes = activeSections.map(s => s.classCode);

        const students = await Student.find({
            classCode: { $in: codes }
        }).select('name score classCode levelReached');

        const formattedScores = students.map(s => ({
            studentName: s.name,
            score: s.score || 0,
            classCode: s.classCode,
            levelReached: s.levelReached || "Era 1"
        }));

        res.json(formattedScores);
    } catch (error) {
        console.error("Analytics Error:", error);
        res.status(500).json({ message: "Error fetching analytics data" });
    }
});

// --- 6.5. STUDENT MANAGEMENT ROUTES ---

// @route   POST /api/v1/students
router.post('/students', protect, async (req, res) => {
    try {
        const { name, email, password, classCode, score, levelReached } = req.body;

        const teacherSections = req.user.sections.map(s => s.classCode);
        if (!teacherSections.includes(classCode)) {
            return res.status(403).json({ message: 'You can only add students to your own sections' });
        }

        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: 'Student with this email already exists' });
        }

        const student = await Student.create({
            name,
            email,
            password,
            classCode,
            score: score || 0,
            levelReached: levelReached || "Era 1: Prehistoric"
        });

        res.status(201).json({
            _id: student._id,
            name: student.name,
            email: student.email,
            classCode: student.classCode,
            score: student.score,
            levelReached: student.levelReached
        });
    } catch (error) {
        console.error("Add Student Error:", error);
        res.status(500).json({ message: "Error adding student" });
    }
});

// @route   PUT /api/v1/students/:id
router.put('/students/:id', protect, async (req, res) => {
    try {
        const { name, email, score, levelReached } = req.body;
        const studentId = req.params.id;

        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        const teacherSections = req.user.sections.map(s => s.classCode);
        if (!teacherSections.includes(student.classCode)) {
            return res.status(403).json({ message: 'You can only update students in your sections' });
        }

        if (name) student.name = name;
        if (email) {
            const emailExists = await Student.findOne({ email, _id: { $ne: studentId } });
            if (emailExists) {
                return res.status(400).json({ message: 'Email already in use' });
            }
            student.email = email;
        }
        if (score !== undefined) {
            const validScore = Math.min(Math.max(score, 0), 100);
            student.score = validScore;
        }
        if (levelReached) student.levelReached = levelReached;

        await student.save();

        res.json({
            _id: student._id,
            name: student.name,
            email: student.email,
            classCode: student.classCode,
            score: student.score,
            levelReached: student.levelReached
        });
    } catch (error) {
        console.error("Update Student Error:", error);
        res.status(500).json({ message: "Error updating student" });
    }
});

// @route   DELETE /api/v1/students/:id
router.delete('/students/:id', protect, async (req, res) => {
    try {
        const studentId = req.params.id;

        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        const teacherSections = req.user.sections.map(s => s.classCode);
        if (!teacherSections.includes(student.classCode)) {
            return res.status(403).json({ message: 'You can only delete students in your sections' });
        }

        await Student.findByIdAndDelete(studentId);
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        console.error("Delete Student Error:", error);
        res.status(500).json({ message: "Error deleting student" });
    }
});

module.exports = router;
````

## File: chronoquest-api/src/routes/authRoutes.js
````javascript
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', authController.registerUser || authController.register);
router.post('/login', authController.loginUser || authController.login);
router.put('/profile', protect, authController.updateTeacherProfile || authController.updateProfile);
router.post('/feedback', protect, authController.submitFeedback);

module.exports = router;
````

## File: chronoquest-api/src/routes/questionRoutes.js
````javascript
const express = require('express');
const router = express.Router();
const { protect, adminOnly } = require('../middleware/authMiddleware');
const {
    createQuestion,
    getAllQuestions,
    getQuestionsByTeacher,
    updateQuestion,
    deleteQuestion,
    toggleQuestionStatus
} = require('../controllers/questionController');


router.post('/', protect, adminOnly, createQuestion);


router.get('/', protect, adminOnly, getAllQuestions);


router.get('/teacher/:teacherId', protect, adminOnly, getQuestionsByTeacher);


router.patch('/:questionId', protect, updateQuestion);


router.delete('/:questionId', protect, deleteQuestion);


router.post('/:questionId/toggle', protect, toggleQuestionStatus);

module.exports = router;
````

## File: chronoquest-api/src/utils/generateCode.js
````javascript
const generateClassCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const codeLength = 6;

    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
};

module.exports = generateClassCode;
````

## File: SYSTEM_DOCUMENTATION.md
````markdown
# ChronoQuest System Documentation

## 📋 Table of Contents
1. [System Overview](#system-overview)
2. [Terminology & Key Concepts](#terminology--key-concepts)
3. [Architecture](#architecture)
4. [Current Implementation Status](#current-implementation-status)
5. [Features](#features)
6. [Tech Stack](#tech-stack)
7. [Project Structure](#project-structure)
8. [Key Features & Functionality](#key-features--functionality)
9. [Database Models](#database-models)
10. [API Endpoints](#api-endpoints)
11. [Complete API Reference](#complete-api-reference)
12. [Authentication & Security](#authentication--security)
13. [Database Management](#database-management)
14. [Database Schema Details](#database-schema-details)
15. [Implementation Roadmap](#implementation-roadmap)
16. [Known Limitations](#known-limitations--blockers)
17. [Getting Started](#getting-started)
18. [Project Setup Guide](#project-setup-guide)

---

## 🎯 System Overview

### Project Identity: ChronoQuest

**Full Title**: ChronoQuest: Development of a Mobile Game-Based Learning Application for Teaching Philippine History among Elementary Students in Boac, Marinduque.

**Mission**: ChronoQuest is a dual-platform educational system designed to engage elementary learners in Philippine history through gamification and data-driven learning analytics. The system bridges play and study through localized historical content and real-time instructor feedback.

**Target Context**:
- **Geographic Focus**: Boac, Marinduque, Philippines (including schools in Buliasnin, Bunganay, and Caganhao)
- **Subject**: Philippine History with emphasis on local Marinduque heritage
- **Audience**: Elementary school learners (students)
- **Instructors**: Teachers and educational administrators

### Current Phase
This release provides the **Instructor Portal** (Web Dashboard) and foundational backend infrastructure.
- **Phase 1** ✅ Core infrastructure + instructor dashboard + admin panel (current)
- **Phase 2** Content management system (planning)
- **Phase 3** Mobile game frontend (future)

### System Description

**ChronoQuest** is an educational platform designed for instructors to manage learner progress and learning analytics. Teachers can create multiple learning groups/classes, assign unique class codes to learners, and track their performance across different historical eras.

The system features a premium minimalist design aesthetic with a clean, spacious interface and controlled color accents, optimized for educators who may not be technology experts.

The system consists of two main applications:
- **chrono-dashboard**: React-based Instructor Portal for teachers and administrators (Port 3001)
- **chronoquest-api**: Node.js/Express backend API (Port 3000)

### Historical Framework: The Eras

ChronoQuest organizes Philippine history into five strategic learning eras:
1. **Pre-Colonial Period**: Early Filipino culture, indigenous systems, and Boac's origins
2. **Spanish Colonization**: Christianization, the Galleon Trade, and colonial impact on the island
3. **Revolutionary Period**: The struggle for independence and local heroism
4. **American & Japanese Occupation**: The Commonwealth era and WWII impact on the region
5. **Post-War to Present**: Modern history and contemporary Marinduque

---

## 📚 Terminology & Key Concepts

### Core Terminology
- **Learner**: An elementary school student using the system. In code, may be referenced as "student" in variable names, but displayed as "Learner" in the UI.
- **Instructor**: A teacher or educational staff member managing learners. May be referenced as "teacher" in code, but displayed as "Instructor" in the UI.
- **Learning Group**: A classroom or cohort of learners. In code, may be called "section" or "class".
- **Mission**: A specific learning task or challenge within an era. Replaces generic terms like "question" or "assessment" in learner-facing UI.
- **Eras**: The five historical periods organizing Philippine history content.
- **Instructor Portal**: The web dashboard for teachers and administrators.
- **Learning Analytics**: Data-driven insights into learner performance and engagement.

### Code vs. UI Distinction
Backend logic and variable names use generic terms like "students", "teachers", "sections", "questions". All **displayed UI text** uses ChronoQuest terminology above to maintain pedagogical consistency.

---

## 🏗️ Architecture

### Monorepo Structure
```
CHRONO-API/
├── chrono-dashboard/        (React Frontend - Port 3001)
└── chronoquest-api/         (Express Backend - Port 3000)
```

### Technology Layers
- **Frontend**: React 19 with React Router for navigation
- **Backend**: Express.js with MongoDB for data persistence
- **Authentication**: JWT (JSON Web Tokens) with bcryptjs password hashing
- **Communication**: RESTful API with Axios HTTP client
- **Database**: MongoDB with Mongoose ODM

---

## 📊 Current Implementation Status

### Implementation Overview

| Feature Category | Status | Notes |
|---|---|---|
| **Authentication** | ✅ 100% | Login, register, JWT tokens fully working |
| **Teacher Dashboard** | ✅ 100% | All features operational |
| **Section Management** | ✅ 100% | Create, archive, unarchive, delete sections |
| **Admin Panel** | ✅ 85% | 5 tabs functional; Settings backend limited |
| **User Management** | ✅ 90% | Full CRUD operations working |
| **Question Management** | ✅ 100% | Create, edit, delete questions with filters |
| **Class Results** | ✅ 100% | Gradebook + leaderboard views, CSV export |
| **Feedback System** | ✅ 100% | Submit and view feedback working |
| **Profile Settings** | ✅ 100% | Update name/email, change password |
| **System Settings** | ⚠️ 50% | UI and API functional; persistence limited |
| **Content Management** | ❌ 0% | Phase 2 planned |

### Admin Panel Navigation (5 Tabs)
1. **Dashboard** — Learning analytics with stat cards and recent activity ✅
2. **Users** — Searchable user management (instructors + learners) ✅
3. **Questions** — Full question CRUD with filters and pagination ✅
4. **Feedback** — Instructor support tickets viewer ✅
5. **Settings** — System configuration ⚠️

---

## ✨ Features

### Instructor Features — ✅ FULLY IMPLEMENTED

- ✅ **User Registration & Authentication**
  - Secure email/password authentication
  - JWT-based login with localStorage persistence

- ✅ **Learning Group Management** (Sections)
  - Create multiple learning groups with auto-generated class codes
  - Archive and unarchive sections (archived sections shown separately, collapsible)
  - Delete sections with confirmation
  - Section selector with active/archived separation in dashboard

- ✅ **Dashboard Overview**
  - At-a-glance learner count, mission count, and average score per selected section
  - Copyable section access code display
  - Empty state prompt when no sections exist

- ✅ **Class Results** (Gradebook + Leaderboard merged)
  - Toggle between Gradebook view and Leaderboard view
  - Gradebook: sorted score table with level reached and submission date
  - Leaderboard: ranked table with medal badges (🥇🥈🥉), stats row (participants, avg, highest, median)
  - CSV export of gradebook data
  - Section selector within the results page

- ✅ **Profile Settings**
  - Update instructor name and email
  - Change password (current password verification, minimum 6 characters)
  - Password visibility toggle on all password fields

- ✅ **Send Feedback**
  - Submit feedback with title, description, type (general/bug/feature), and priority
  - Accessible from the instructor sidebar

### Admin Features — ✅ IMPLEMENTED

- ✅ **Admin Panel Interface**
  - Separate sidebar with 5 navigation tabs
  - Back-to-dashboard navigation button
  - Admin name in welcome header
  - Admin Portal shortcut in instructor sidebar (visible to admin-role users only)

- ✅ **User Management**
  - View all instructors and learners in separate searchable tables
  - Edit user details (name, email, role, admin level for instructors)
  - Deactivate instructor accounts
  - Delete users permanently
  - Status badges (Active/Inactive)

- ✅ **Learning Analytics Dashboard**
  - Total users, instructors, learners, learning groups stat cards
  - Recent activity feed (last 10 system actions)

- ✅ **Question Management** (accessible from Admin Panel)
  - Create questions with title, historical period, difficulty, 4 options, correct answer
  - Edit and delete questions
  - Filter by period and difficulty
  - Search by topic/title
  - Pagination (10 per page)
  - Color-coded period and difficulty badges

- ✅ **Feedback & Support Viewer**
  - View all instructor feedback submissions
  - Shows type badge (bug/feature/general) and status badge (open/resolved)
  - Submitter email and date visible

- ⚠️ **System Settings**
  - Configure max learning groups per instructor and max learners per group
  - UI and API calls functional; persistence depends on backend

---

## 🛠️ Tech Stack

### Frontend (chrono-dashboard)
| Technology | Version | Purpose |
|------------|---------|---------||
| React | 19.2.4 | UI Framework |
| React Router DOM | 7.14.0 | Client-side routing |
| Axios | 1.14.0 | HTTP client for API calls |
| Plain CSS | — | Custom stylesheet (replaces Tailwind) |
| Lucide React | 1.7.0 | Icon library |
| React Hot Toast | 2.6.0 | Toast notifications |
| React Scripts | 5.0.1 | Build tools |

### Backend (chronoquest-api)
| Technology | Version | Purpose |
|------------|---------|---------||
| Express.js | 5.2.1 | Web framework |
| MongoDB | — | NoSQL database |
| Mongoose | 9.4.1 | MongoDB ODM |
| JWT | 9.0.3 | Authentication tokens |
| Bcryptjs | 3.0.3 | Password hashing |
| CORS | 2.8.6 | Cross-origin requests |
| Dotenv | 17.4.0 | Environment variables |
| Nodemon | 3.1.14 | Development auto-reload |

---

## 📁 Project Structure

### Frontend Structure
```
chrono-dashboard/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── AdminSidebar.js      # Admin panel sidebar navigation
│   │   └── TeacherSidebar.js    # Instructor dashboard sidebar navigation
│   ├── pages/
│   │   ├── Dashboard.js         # Main instructor dashboard
│   │   ├── AdminPanel.js        # Admin control panel
│   │   ├── LoginPage.js         # Instructor login
│   │   ├── RegisterPage.js      # Instructor registration
│   │   ├── ProfileSettings.js   # Profile & password management
│   │   ├── ClassResults.js      # Gradebook + Leaderboard merged view
│   │   ├── QuestionManagement.js # Question CRUD with filters
│   │   └── Leaderboard.js       # Standalone leaderboard (legacy)
│   ├── context/
│   │   └── AuthContext.js       # Authentication state management
│   ├── App.js                   # Main app component with routing
│   ├── App.css                  # App-level styles
│   ├── index.js                 # React entry point
│   └── index.css                # Global styles (custom CSS, no Tailwind)
├── package.json
└── postcss.config.js
```

### Backend Structure
```
chronoquest-api/
├── src/
│   ├── config/
│   │   └── db.js                    # Database connection
│   ├── controllers/
│   │   ├── authController.js        # Authentication logic (register, login, profile, feedback)
│   │   ├── analyticsController.js   # Analytics operations
│   │   ├── studentController.js     # Student operations
│   │   ├── adminController.js       # Admin panel logic
│   │   ├── leaderboardController.js # Leaderboard and stats
│   │   └── questionController.js    # Question CRUD
│   ├── middleware/
│   │   ├── authMiddleware.js        # JWT protection middleware
│   │   └── adminMiddleware.js       # Admin role verification
│   ├── models/
│   │   ├── teacherModel.js          # Teacher schema with sections array
│   │   ├── studentModel.js          # Student schema
│   │   ├── scoreModel.js            # Score/assessment schema
│   │   ├── activityLogModel.js      # User activity tracking
│   │   ├── questionModel.js         # Quiz questions schema
│   │   ├── feedbackModel.js         # User feedback schema
│   │   └── systemSettingsModel.js   # Platform settings schema
│   ├── routes/
│   │   ├── apiRoutes.js             # Main API router (teacher + analytics + leaderboard + questions)
│   │   ├── authRoutes.js            # Authentication routes
│   │   ├── adminRoutes.js           # Admin endpoints
│   │   ├── leaderboardRoutes.js     # Leaderboard routes
│   │   └── questionRoutes.js        # Question routes
│   └── utils/
│       └── generateCode.js          # Class code generation utility
├── server.js                        # Express app setup & startup
└── package.json
```

---

## 🎮 Key Features & Functionality

### 1. Authentication System

#### Registration Flow
- User provides: `name`, `email`, `password`
- Password is hashed using bcryptjs
- User role defaults to `teacher`
- User data stored in MongoDB

#### Login Flow
- User provides: `email`, `password`
- Password verified against hashed stored password
- JWT token generated on successful login
- Token and teacher data stored in localStorage

#### Protected Routes
- All protected endpoints require JWT token in `Authorization: Bearer <token>` header
- Token verified using authMiddleware
- Invalid/expired tokens return 401 Unauthorized

### 2. Dashboard Interface

#### Layout
- **Sidebar Navigation**: Fixed left sidebar (256px wide)
- **Main Content Area**: Offset by sidebar with generous padding
- **Color Palette**:
  - Background: `#f8fafc` (slate-50)
  - Cards: `#ffffff` with `#e2e8f0` border
  - Primary Text: `#0f172a` (slate-900)
  - Secondary Labels: `#94a3b8` (slate-400)
  - Primary Action: `#059669` (emerald-600)
  - Section Indicator: `#f59e0b` (amber-500)
  - Feedback/Modals: `#4f46e5` (indigo-600)

#### Section Management
- Teacher creates sections with custom names
- Each section gets a unique auto-generated class code
- Active sections displayed as chip buttons in dashboard
- Archived sections hidden behind a collapsible toggle

### 3. Class Results

#### Gradebook View
- Fetches scores from `/analytics/overall`, filtered by selected class code
- Sorted by score (descending)
- Columns: rank, learner name, score badge, level reached, submission date
- CSV export with filename `Results_<SectionName>.csv`

#### Leaderboard View
- Fetches from `/leaderboard/:classCode` and `/leaderboard/:classCode/stats`
- Stats row: participants, average score, highest score, median score
- Medal badges for top 3 ranks (🥇🥈🥉) with color-coded row backgrounds
- Trending-up icon on the top-ranked student

### 4. Question Management

- Accessible from Admin Panel (Questions tab)
- Questions linked to one of 5 historical periods
- Difficulty levels: Easy, Medium, Hard
- 4 answer options with one correct answer (selectable via circle toggle)
- Optional additional notes field
- Search by topic/title, filter by period and difficulty
- Debounced search (300ms)
- Pagination at 10 questions per page
- Color-coded badges for period and difficulty

### 5. Admin Panel

#### Analytics Dashboard
- Loads on admin panel entry (Dashboard tab)
- Shows total users, instructors, learners, and learning groups
- Recent activity feed from usage stats API

#### User Management
- Separate tables for instructors and learners
- Inline search filters both tables simultaneously
- Edit modal: update name, email; for instructors also role and admin level
- Deactivate (instructors only) and delete actions

#### Feedback Viewer
- Lists up to 10 most recent feedback items
- Shows type and status as colored badges

#### System Settings
- Two configurable fields: max learning groups per instructor, max learners per group
- Save and Reset actions

---

## 💾 Database Models

### Teacher Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  classCode: String (unique),
  role: String (default: 'teacher'),
  adminLevel: String,
  isActive: Boolean (default: true),
  sections: [{
    sectionName: String (required),
    classCode: String (required),
    isArchived: Boolean (default: false),
    createdAt: Date
  }],
  timestamps: { createdAt, updatedAt }
}
```

### Student Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  classCode: String (required),
  score: Number (default: 0),
  levelReached: String (default: "Era 1"),
  timestamps: { createdAt, updatedAt }
}
```

### Score Model
```javascript
{
  studentName: String (required),
  classCode: String (required),
  levelReached: String (required),
  score: Number (required),
  teacherId: ObjectId (ref: Teacher, required),
  timestamps: { createdAt, updatedAt }
}
```

### Question Model
```javascript
{
  title: String (required),
  description: String,
  topic: String,
  period: String (enum: PERIODS),
  difficultyLevel: String (enum: ['Easy', 'Medium', 'Hard']),
  options: [String] (length: 4),
  correctAnswer: Number (index into options array),
  createdBy: ObjectId (ref: Teacher),
  timestamps: { createdAt, updatedAt }
}
```

### Feedback Model
```javascript
{
  title: String (required),
  description: String (required),
  type: String (enum: ['bug_report', 'feature_request', 'general_feedback']),
  submittedBy: ObjectId (ref: Teacher, required),
  priority: String (enum: ['low', 'medium', 'high', 'critical']),
  status: String (enum: ['open', 'in_progress', 'resolved', 'closed']),
  response: { admin: ObjectId, message: String, respondedAt: Date },
  timestamps: { createdAt, updatedAt }
}
```

### Activity Log Model
```javascript
{
  userId: ObjectId (ref: Teacher, required),
  userRole: String (enum: ['teacher', 'student', 'admin']),
  action: String,
  resource: String,
  resourceId: ObjectId,
  details: Object,
  ipAddress: String,
  status: String (enum: ['success', 'failure']),
  createdAt: Date
}
```

### System Settings Model
```javascript
{
  key: String (required, unique),
  value: Mixed,
  type: String (enum: ['string', 'number', 'boolean', 'json']),
  description: String,
  category: String (enum: ['general', 'security', 'performance', 'email', 'features']),
  updatedBy: ObjectId (ref: Teacher),
  updatedAt: Date
}
```

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:3000/api/v1
```

### Authentication Endpoints
| Method | Endpoint | Protected | Purpose |
|--------|----------|-----------|---------|
| POST | `/auth/register` | ❌ | Register new instructor |
| POST | `/auth/login` | ❌ | Login, return JWT |
| GET | `/auth/profile` | ✅ | Get current instructor profile |
| PUT | `/auth/profile` | ✅ | Update instructor name/email |
| PUT | `/auth/change-password` | ✅ | Change instructor password |
| POST | `/auth/feedback` | ✅ | Submit instructor feedback |

### Teacher Endpoints
| Method | Endpoint | Protected | Purpose |
|--------|----------|-----------|---------|
| POST | `/teacher/add-section` | ✅ | Create new section |
| DELETE | `/teacher/delete-section/:classCode` | ✅ | Delete section and its scores |
| POST | `/teacher/archive-section/:classCode` | ✅ | Archive a section |
| POST | `/teacher/unarchive-section/:classCode` | ✅ | Restore an archived section |

### Analytics Endpoints
| Method | Endpoint | Protected | Purpose |
|--------|----------|-----------|---------|
| GET | `/analytics/overall` | ✅ | Get all students' scores and levels |

### Leaderboard Endpoints
| Method | Endpoint | Protected | Purpose |
|--------|----------|-----------|---------|
| GET | `/leaderboard/:classCode` | ✅ | Get ranked leaderboard for a class |
| GET | `/leaderboard/:classCode/stats` | ✅ | Get stats (avg, highest, median, participants) |

### Question Endpoints
| Method | Endpoint | Protected | Purpose |
|--------|----------|-----------|---------|
| GET | `/questions` | ✅ | Get paginated questions (filterable by topic, difficulty, period) |
| POST | `/questions` | ✅ | Create a new question |
| PATCH | `/questions/:id` | ✅ | Update a question |
| DELETE | `/questions/:id` | ✅ | Delete a question |

### Admin Endpoints (Admin Role Required)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/admin/users` | Get all instructors and students |
| POST | `/admin/users/deactivate` | Deactivate a user account |
| DELETE | `/admin/users/:userId` | Delete user permanently |
| PATCH | `/admin/users/:userId/:userType` | Update user details |
| GET | `/admin/users/:userId/logs` | Get activity logs for a user |
| GET | `/admin/activity-logs` | Get all system activity logs |
| GET | `/admin/analytics` | Get platform-wide analytics |
| GET | `/admin/usage-stats` | Get usage statistics and action counts |
| GET | `/admin/feedback` | Get all instructor feedback |
| POST | `/admin/feedback/:id/respond` | Respond to a feedback item |
| GET | `/admin/settings` | Get system settings |
| POST | `/admin/settings` | Update a system setting |

### Diagnostic Endpoints
| Method | Endpoint | Protected | Purpose |
|--------|----------|-----------|---------|
| GET | `/debug` | ❌ | Check server status and DB connection |
| GET | `/test` | ❌ | Verify API is running |

---

## 📘 Complete API Reference

### Authentication Endpoints

#### POST `/auth/register`
**Description**: Register a new instructor account
**Headers**: None
**Request Body**:
```json
{
  "name": "John Teacher",
  "email": "john@school.com",
  "password": "securepassword123"
}
```
**Success Response** (201):
```json
{
  "_id": "user_id_here",
  "name": "John Teacher",
  "email": "john@school.com",
  "classCode": "AUTO_GENERATED",
  "sections": [],
  "role": "teacher",
  "token": "jwt_token_here"
}
```
**Error Responses**:
- 400: Teacher already exists (email duplicate)
- 500: Server error

---

#### POST `/auth/login`
**Description**: Login with credentials and receive JWT token
**Headers**: None
**Request Body**:
```json
{
  "email": "john@school.com",
  "password": "securepassword123"
}
```
**Success Response** (200):
```json
{
  "_id": "user_id_here",
  "name": "John Teacher",
  "email": "john@school.com",
  "classCode": "AUTO_GENERATED",
  "sections": [
    {
      "_id": "section_id",
      "sectionName": "Grade 4-A",
      "classCode": "AB12CD",
      "isArchived": false,
      "createdAt": "2026-04-10T10:00:00Z"
    }
  ],
  "role": "teacher",
  "token": "jwt_token_here"
}
```
**Error Responses**:
- 401: Invalid email or password
- 500: Server error

---

#### GET `/auth/profile`
**Description**: Get current logged-in instructor's profile
**Headers**: `Authorization: Bearer <token>` ✅
**Success Response** (200):
```json
{
  "_id": "user_id_here",
  "name": "John Teacher",
  "email": "john@school.com",
  "classCode": "AUTO_GENERATED",
  "sections": [...],
  "role": "teacher"
}
```
**Error Responses**:
- 401: Not authorized (invalid/missing token)
- 404: Teacher not found

---

#### PUT `/auth/profile`
**Description**: Update instructor name and email
**Headers**: `Authorization: Bearer <token>` ✅
**Request Body**:
```json
{
  "name": "Jane Teacher",
  "email": "jane@school.com"
}
```
**Success Response** (200):
```json
{
  "name": "Jane Teacher",
  "email": "jane@school.com",
  ...
}
```

---

#### PUT `/auth/change-password`
**Description**: Change instructor password (requires current password verification)
**Headers**: `Authorization: Bearer <token>` ✅
**Request Body**:
```json
{
  "currentPassword": "oldpassword123",
  "newPassword": "newpassword456"
}
```
**Success Response** (200):
```json
{ "message": "Password changed successfully" }
```
**Error Responses**:
- 400: Current password incorrect
- 400: Password must be at least 6 characters

---

#### POST `/auth/feedback`
**Description**: Submit feedback about the platform
**Headers**: `Authorization: Bearer <token>` ✅
**Request Body**:
```json
{
  "title": "Bug in gradebook export",
  "description": "CSV export truncates long student names",
  "type": "bug_report",
  "priority": "high"
}
```
**Success Response** (201):
```json
{
  "_id": "feedback_id",
  "title": "Bug in gradebook export",
  "submittedBy": "teacher_id",
  "status": "open",
  "createdAt": "2026-04-10T15:30:00Z"
}
```

---

### Teacher/Section Management Endpoints

#### POST `/teacher/add-section`
**Description**: Create a new learning section/class
**Headers**: `Authorization: Bearer <token>` ✅
**Request Body**:
```json
{
  "sectionName": "Grade 4-A History"
}
```
**Success Response** (201):
```json
{
  "updatedTeacher": {
    "_id": "teacher_id",
    "sections": [
      {
        "sectionName": "Grade 4-A History",
        "classCode": "AB12CD",
        "isArchived": false,
        "createdAt": "2026-04-10T10:00:00Z"
      }
    ]
  }
}
```
**Error Responses**:
- 400: Section name is required
- 500: Server error

---

#### DELETE `/teacher/delete-section/:classCode`
**Description**: Permanently delete a section and associated scores
**Headers**: `Authorization: Bearer <token>` ✅
**URL Params**: `:classCode` (string, required) — The class code of the section to delete
**Success Response** (200):
```json
{
  "message": "Section and associated scores deleted",
  "updatedTeacher": { ... }
}
```

---

#### POST `/teacher/archive-section/:classCode`
**Description**: Archive a section (hide from active list, retain data)
**Headers**: `Authorization: Bearer <token>` ✅
**Success Response** (200):
```json
{
  "message": "Section archived successfully",
  "updatedTeacher": { ... }
}
```

---

#### POST `/teacher/unarchive-section/:classCode`
**Description**: Restore an archived section to active view
**Headers**: `Authorization: Bearer <token>` ✅
**Success Response** (200):
```json
{
  "message": "Section unarchived successfully",
  "updatedTeacher": { ... }
}
```

---

### Analytics Endpoints

#### GET `/analytics/overall`
**Description**: Get all students' scores and performance data
**Headers**: `Authorization: Bearer <token>` ✅
**Query Params**: None
**Success Response** (200):
```json
[
  {
    "_id": "score_id",
    "studentName": "Maria Santos",
    "classCode": "AB12CD",
    "levelReached": "Era 2: Spanish Colonization",
    "score": 850,
    "teacherId": "teacher_id",
    "createdAt": "2026-04-10T14:30:00Z"
  },
  ...
]
```

---

### Leaderboard Endpoints

#### GET `/leaderboard/:classCode`
**Description**: Get ranked leaderboard for a specific class (sorted by score, descending)
**Headers**: `Authorization: Bearer <token>` ✅
**URL Params**: `:classCode` (string, required)
**Success Response** (200):
```json
{
  "leaderboard": [
    {
      "rank": 1,
      "studentName": "Maria Santos",
      "score": 950,
      "levelReached": "Era 3: Revolutionary Period",
      "createdAt": "2026-04-10T14:30:00Z",
      "_id": "score_id"
    },
    {
      "rank": 2,
      "studentName": "Juan Dela Cruz",
      "score": 890,
      ...
    }
  ],
  "classCode": "AB12CD",
  "totalStudents": 25
}
```
**Error Responses**:
- 404: Class not found

---

#### GET `/leaderboard/:classCode/stats`
**Description**: Get statistical summary for a class leaderboard
**Headers**: `Authorization: Bearer <token>` ✅
**Success Response** (200):
```json
{
  "stats": {
    "totalParticipants": 25,
    "averageScore": 742.5,
    "highestScore": 980,
    "medianScore": 750,
    "lowestScore": 450
  }
}
```

---

### Question Management Endpoints

#### GET `/questions`
**Description**: Get paginated questions with optional filters
**Headers**: `Authorization: Bearer <token>` ✅
**Query Params**:
- `page` (number, default: 1) — Page number for pagination
- `limit` (number, default: 10) — Items per page
- `period` (string, optional) — Filter by historical period (e.g., "Pre-colonial", "Spanish Colonization")
- `difficulty` (string, optional) — Filter by difficulty ("Easy", "Medium", "Hard")
- `topic` (string, optional) — Search by title/topic (case-insensitive regex)

**Example Request**: `GET /questions?page=1&limit=10&period=Spanish Colonization&difficulty=Medium`

**Success Response** (200):
```json
{
  "questions": [
    {
      "_id": "question_id",
      "title": "What year did the Spanish arrive in the Philippines?",
      "description": "Multiple choice question about Spanish colonization",
      "period": "Spanish Colonization",
      "difficultyLevel": "Easy",
      "options": ["1521", "1565", "1572", "1610"],
      "correctAnswer": 1,
      "isActive": true,
      "createdBy": { "_id": "teacher_id", "name": "Admin" },
      "createdAt": "2026-04-01T10:00:00Z"
    }
  ],
  "pagination": {
    "total": 25,
    "page": 1,
    "limit": 10,
    "pages": 3
  }
}
```

---

#### POST `/questions`
**Description**: Create a new question (Admin only)
**Headers**: `Authorization: Bearer <token>` ✅ + Admin privilege required
**Request Body**:
```json
{
  "title": "What year did the Spanish arrive in the Philippines?",
  "description": "A historically important date",
  "period": "Spanish Colonization",
  "difficultyLevel": "Easy",
  "options": ["1521", "1565", "1572", "1610"],
  "correctAnswer": 1
}
```
**Success Response** (201):
```json
{
  "message": "Question created successfully",
  "question": {
    "_id": "new_question_id",
    ...
  }
}
```

---

#### PATCH `/questions/:questionId`
**Description**: Update a question (Admin or creator)
**Headers**: `Authorization: Bearer <token>` ✅
**Request Body**: Same structure as POST (all fields optional)
**Success Response** (200): Updated question object

---

#### DELETE `/questions/:questionId`
**Description**: Delete a question (Admin or creator)
**Headers**: `Authorization: Bearer <token>` ✅
**Success Response** (200):
```json
{ "message": "Question deleted successfully" }
```

---

### Admin Endpoints (Admin role required)

#### GET `/admin/users`
**Description**: Get all instructors and students in the system
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Success Response** (200):
```json
{
  "teachers": [
    {
      "_id": "teacher_id",
      "name": "John Teacher",
      "email": "john@school.com",
      "role": "teacher",
      "userType": "teacher",
      "totalSections": 3,
      "isActive": true
    }
  ],
  "students": [
    {
      "_id": "student_id",
      "name": "Maria Santos",
      "email": "maria@student.com",
      "classCode": "AB12CD",
      "userType": "student"
    }
  ],
  "totalUsers": 28,
  "totalTeachers": 3,
  "totalStudents": 25
}
```

---

#### POST `/admin/users/deactivate`
**Description**: Deactivate a user account (prevent login)
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Request Body**:
```json
{
  "userId": "user_id",
  "userType": "teacher"
}
```
**Success Response** (200):
```json
{ "message": "User deactivated successfully" }
```

---

#### DELETE `/admin/users/:userId`
**Description**: Permanently delete a user
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Request Body**: 
```json
{
  "userId": "user_id",
  "userType": "teacher"
}
```

---

#### PATCH `/admin/users/:userId/:userType`
**Description**: Update user details (name, email, role, admin level)
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Request Body** (for teacher):
```json
{
  "name": "Jane Doe",
  "email": "jane@school.com",
  "role": "admin",
  "adminLevel": "content_admin"
}
```

---

#### GET `/admin/activity-logs`
**Description**: Get all system activity logs (paginated)
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Success Response** (200):
```json
{
  "logs": [
    {
      "_id": "log_id",
      "userId": "teacher_id",
      "userRole": "teacher",
      "action": "CREATE_SECTION",
      "resource": "Section",
      "resourceId": "section_id",
      "status": "success",
      "createdAt": "2026-04-10T15:30:00Z"
    }
  ],
  "pagination": { ... }
}
```

---

#### GET `/admin/analytics`
**Description**: Get platform-wide analytics dashboard data
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Success Response** (200):
```json
{
  "totalTeachers": 5,
  "totalStudents": 127,
  "totalSections": 12,
  "totalQuestions": 50,
  "recentActivity": [...]
}
```

---

#### GET `/admin/usage-stats`
**Description**: Get detailed usage statistics
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required

---

#### GET `/admin/feedback`
**Description**: Get all instructor feedback submissions
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Success Response** (200):
```json
{
  "feedback": [
    {
      "_id": "feedback_id",
      "title": "Bug in CSV export",
      "description": "Long student names are truncated",
      "type": "bug_report",
      "priority": "high",
      "status": "open",
      "email": "john@school.com",
      "createdAt": "2026-04-10T14:00:00Z"
    }
  ]
}
```

---

#### GET `/admin/settings`
**Description**: Get all system settings
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Success Response** (200):
```json
{
  "settings": [
    {
      "_id": "setting_id",
      "key": "max_sections_per_teacher",
      "value": 10,
      "type": "number",
      "category": "general"
    }
  ]
}
```

---

#### POST `/admin/settings`
**Description**: Update or create a system setting
**Headers**: `Authorization: Bearer <token>` ✅ + Admin required
**Request Body**:
```json
{
  "key": "max_sections_per_teacher",
  "value": 20,
  "type": "number"
}
```

---

### Diagnostic Endpoints

#### GET `/test`
**Description**: Health check - verify API is running
**Headers**: None
**Success Response** (200):
```json
{ "message": "API is working on Port 5000!" }
```

---

#### GET `/debug`
**Description**: Detailed server status and database connection check
**Headers**: None
**Success Response** (200):
```json
{
  "message": "Server is alive!",
  "dbStatus": 1
}
```
**DB Status Values**:
- 0: disconnected
- 1: connected
- 2: connecting
- 3: disconnecting

---

## 🗄️ Database Schema Comprehensive Details

### Teacher/Instructor Collection

**Collection Name**: `teachers`

**Fields**:
| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `_id` | ObjectId | Yes | Auto-generated MongoDB ID |
| `name` | String | Yes | Instructor full name (min: 1, max: 100) |
| `email` | String | Yes | Unique email address (lowercase) |
| `password` | String | Yes | Hashed via bcryptjs (never stored plain) |
| `classCode` | String | Yes | Unique auto-generated code for legacy compatibility |
| `role` | String | No | Enum: 'teacher', 'admin' (default: 'teacher') |
| `adminLevel` | String | No | Enum: 'super_admin', 'content_admin', 'support_admin' (null if not admin) |
| `permissions` | [String] | No | Array of permission strings (e.g., 'manage_users', 'manage_content') |
| `sections` | [Object] | No | Array of section subdocuments (see below) |
| `isActive` | Boolean | No | Account active status (default: true) |
| `lastLogin` | Date | No | Timestamp of last login (initially null) |
| `createdAt` | Date | Yes | Auto-generated timestamp |
| `updatedAt` | Date | Yes | Auto-updated on changes |

**Section Subdocument Structure**:
```javascript
{
  _id: ObjectId,
  sectionName: String (required, max: 100),
  classCode: String (unique, required),
  createdAt: Date (default: now),
  isArchived: Boolean (default: false),
  archivedAt: Date (null if not archived)
}
```

**Indexes**:
- `email` (unique)
- `classCode` (unique)

---

### Student Collection

**Collection Name**: `students`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `_id` | ObjectId | Yes | Auto-generated |
| `name` | String | Yes | Student full name |
| `email` | String | Yes | Unique email (typically from mobile app enrollment) |
| `password` | String | Yes | Hashed password |
| `classCode` | String | Yes | Links to teacher's section code |
| `score` | Number | No | Student's current score (default: 0) |
| `levelReached` | String | No | Current era/level (default: "Era 1: Pre-Colonial Period") |
| `createdAt` | Date | Yes | Auto-generated |
| `updatedAt` | Date | Yes | Auto-updated |

**Indexes**:
- `email` (unique)
- `classCode` (for filtering by section)

---

### Score Collection

**Collection Name**: `scores`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `_id` | ObjectId | Yes | Auto-generated |
| `studentName` | String | Yes | Student's name (captured at submission time) |
| `classCode` | String | Yes | Section identifier |
| `levelReached` | String | Yes | Era reached (e.g., "Era 2: Spanish Colonization") |
| `score` | Number | Yes | Integer score (0-1000 range recommended) |
| `teacherId` | ObjectId | Yes | Reference to Teacher who owns this section |
| `createdAt` | Date | Yes | Submission timestamp |
| `updatedAt` | Date | Yes | Auto-updated |

**Indexes**:
- `teacherId`
- `classCode + teacherId` compound (for section queries)

---

### Question Collection

**Collection Name**: `questions`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `_id` | ObjectId | Yes | Auto-generated |
| `title` | String | Yes | Question text (min: 5, max: 500 chars) |
| `description` | String | No | Extended context (max: 1000 chars) |
| `topic` | String | No | Search/filter field (backward compat with period) |
| `period` | String | Yes | Enum: Pre-colonial, Spanish Colonization, Revolutionary, American/Japanese, Post-war |
| `options` | [String] | Yes | Array of 4 answer choices (exactly 4, all non-empty) |
| `correctAnswer` | Number | Yes | Index of correct option (0-3) |
| `difficultyLevel` | String | No | Enum: Easy, Medium, Hard (default: Medium) |
| `createdBy` | ObjectId | Yes | Reference to Teacher who created question |
| `isActive` | Boolean | No | Question active status (default: true) |
| `createdAt` | Date | Yes | Auto-generated |
| `updatedAt` | Date | Yes | Auto-updated |

**Validation Rules**:
- Options must be array of exactly 4 non-empty strings
- Correct answer must be integer 0-3
- Period must be one of 5 valid eras
- Title minimum 5 characters

**Indexes**:
- `period`
- `difficultyLevel`
- `createdBy`

---

### Feedback Collection

**Collection Name**: `feedback`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `_id` | ObjectId | Yes | Auto-generated |
| `title` | String | Yes | Feedback subject |
| `description` | String | Yes | Detailed message |
| `type` | String | Yes | Enum: bug_report, feature_request, general_feedback |
| `submittedBy` | ObjectId | Yes | Reference to Teacher/User submitting feedback |
| `email` | String | Yes | Email captured from submitter |
| `priority` | String | No | Enum: low, medium, high, critical (default: medium) |
| `status` | String | No | Enum: open, in_progress, resolved, closed (default: open) |
| `attachments` | [String] | No | Array of file URLs |
| `response` | Object | No | Admin response metadata (see below) |
| `createdAt` | Date | Yes | Auto-generated |
| `updatedAt` | Date | Yes | Auto-updated |

**Response Subdocument**:
```javascript
{
  admin: ObjectId (ref to Teacher who responded),
  message: String,
  respondedAt: Date
}
```

---

### Activity Log Collection

**Collection Name**: `activitylogs`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `_id` | ObjectId | Yes | Auto-generated |
| `userId` | ObjectId | Yes | Reference to Teacher/User (indexed) |
| `userRole` | String | Yes | Enum: teacher, student, admin |
| `action` | String | Yes | Action name (e.g., LOGIN, CREATE_SECTION, DELETE_STUDENT) |
| `resource` | String | No | Resource type (e.g., Section, Student, Question) |
| `resourceId` | ObjectId | No | ID of affected resource |
| `details` | Object | No | Additional context JSON (default: {}) |
| `ipAddress` | String | No | Request IP address |
| `status` | String | No | Enum: success, failure (default: success) |
| `createdAt` | Date | Yes | Timestamp (indexed) |

**Indexes**:
- `userId`
- `createdAt`

---

### System Settings Collection

**Collection Name**: `systemsettings`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `_id` | ObjectId | Yes | Auto-generated |
| `key` | String | Yes | Unique setting name (e.g., max_sections_per_teacher) |
| `value` | Mixed | No | Value (String, Number, Boolean, or JSON) |
| `type` | String | No | Enum: string, number, boolean, json (default: string) |
| `description` | String | No | Human-readable description |
| `category` | String | No | Enum: general, security, performance, email, features |
| `updatedBy` | ObjectId | No | Admin who last updated |
| `updatedAt` | Date | No | Last modification timestamp |

**Example Settings**:
- `{ key: "max_sections_per_teacher", value: 10, type: "number" }`
- `{ key: "enable_csv_export", value: true, type: "boolean" }`

---

## 🌱 Database Management

### System Data Status

The system has been initialized with sample data:
- **5 Instructors** (teachers)
- **50 Students** (learners)
- **25 Questions** (5 per historical era, 5 difficulty levels)

This data is **persistent in MongoDB** and available for use immediately.

---

### Syncing Scores to Leaderboard

The leaderboard displays scores from the `Score` collection. If students have completed activities or you want to sync existing scores:

**Admin Endpoint**: `POST /api/v1/admin/sync-scores`

**Description**: Migrates student scores from the Student model to the Score collection for leaderboard display.

**Usage** (via Admin Panel):
1. Login as admin
2. Navigate to Admin Dashboard
3. Click "Sync Scores to Leaderboard" button (auto-called on dashboard load)
4. Leaderboard will now display all student scores

**Manual API Call**:
```bash
curl -X POST http://localhost:3000/api/v1/admin/sync-scores \
  -H "Authorization: Bearer <admin-token>" \
  -H "Content-Type: application/json"
```

**Response**:
```json
{
  "message": "Score sync completed",
  "synced": 35,
  "total": 50,
  "errors": null
}
```

---

### Test Credentials

**Admin Account** (from database):
```
Email: maria.garcia@deped.gov.ph
Password: password123
```

---

### Database Management

**View Sample Data**:
```javascript
// Connect to MongoDB
use chronoquest

// Verify counts
db.teachers.countDocuments()           // 5
db.students.countDocuments()           // >= 35
db.questions.countDocuments()          // >= 24
db.scores.countDocuments()             // Score collection documents

// View a student
db.students.findOne({ name: "Student Name" })

// View activity logs
db.activitylogs.find().limit(10).sort({ createdAt: -1 })
```

**Clear and Reinitialize** (if needed):
```javascript
// Drop collections to reset
db.teachers.deleteMany({})
db.students.deleteMany({})
db.questions.deleteMany({})
db.scores.deleteMany({})
db.activitylogs.deleteMany({})

// Then reseed via Admin → Sync Scores endpoint
```

---

### Troubleshooting Seeding

| Problem | Solution |
|---------|----------|
| `mongoimport: command not found` | Install MongoDB tools;  add to PATH |
| `ECONNREFUSED` | Ensure MongoDB is running (`mongod`) |
| `E11000 duplicate key error` | Clear collection first or use `--mode upsert` |
| Connection refused to Atlas | Check firewall, IP whitelist, connection URI |
| Password authentication failed | Verify credentials and MONGO_URI in .env |

---

### Reset Database to Empty State

```bash
mongo chronoquest
> db.dropDatabase()

# Or delete specific collections
> db.teachers.deleteMany({})
> db.students.deleteMany({})
> db.questions.deleteMany({})
```

Then re-seed with your preferred method.

---

## 🎨 UI/UX Design System

### CSS Architecture
The frontend uses a **custom plain CSS stylesheet** (`index.css`) with semantic class names. Tailwind CSS has been removed. All styling is defined globally in `src/index.css`.

### Class Naming Convention
Classes use simple, descriptive names grouped by component type:
- Layout: `.page`, `.page-centered`, `.main-content`, `.sidebar`
- Cards: `.card`, `.card-lg`, `.stat-card`
- Buttons: `.btn-primary`, `.btn-dark`, `.btn-indigo`, `.btn-emerald`, `.btn-red`, `.btn-ghost`, `.btn-outline`
- Forms: `.form-input`, `.form-input-sm`, `.form-label`, `.form-select`, `.form-textarea`
- Tables: `.table`, `.table-wrapper`, `.table-cell-name`, `.table-cell-sub`
- Badges: `.badge`, `.badge-active`, `.badge-amber`, `.badge-blue`, `.badge-red`
- Alerts: `.alert-error`, `.alert-success`, `.alert-info`
- Modals: `.modal-overlay`, `.modal`, `.modal-lg`, `.modal-md`

### Color Palette
| Color | Hex | Purpose |
|-------|-----|---------|
| Background | `#f8fafc` | Page background |
| Surface | `#ffffff` | Cards and containers |
| Border | `#e2e8f0` | Subtle dividers |
| Primary Text | `#0f172a` | Headers, main content |
| Secondary Text | `#94a3b8` | Labels, hints |
| Action — Dark | `#0f172a` | Primary buttons |
| Action — Indigo | `#4f46e5` | Modals, feedback submit |
| Action — Emerald | `#059669` | Export, success |
| Status — Amber | `#f59e0b` | Active section, score badges |
| Danger | `#dc2626` | Delete, password change |

### Design Principles
1. **Stability**: Flat design, no 3D effects, no scaling on hover
2. **Minimalism**: Controlled whitespace, typography weight over decorative elements
3. **Consistency**: `border-radius: 16px` throughout, unified spacing
4. **Quiet Color**: Mostly slate palette with controlled accents per action type

---

## 🔒 Authentication & Security

### JWT Implementation
- **Token Format**: `Bearer <token>`
- **Token Location**: `Authorization` request header
- **Payload**: User ID, email, role

### Password Security
- Hashed using bcryptjs (default salt rounds: 10)
- Original passwords never stored
- Minimum 6 characters enforced on change password

### Protected Routes
- `protect` middleware verifies JWT on each request
- Returns 401 if token invalid or missing
- Admin routes require `adminMiddleware` role check

### Admin Role
- Users with `role === 'admin'` access admin endpoints
- `adminLevel` field (e.g., `super_admin`, `content_admin`, `support_admin`)
- All admin actions tracked in activity logs

---

## 🗺️ Implementation Roadmap

### Phase 1 ✅ CURRENT (Core Infrastructure)
- ✅ Authentication system (login/register/profile/password change)
- ✅ Instructor dashboard with section management (create, archive, unarchive, delete)
- ✅ Class Results: gradebook and leaderboard views with CSV export
- ✅ Admin panel with 5 functional tabs
- ✅ User management (view, edit, deactivate, delete)
- ✅ Question management with filters and pagination
- ✅ Feedback submit (instructor) and feedback viewer (admin)
- ✅ Learning analytics and usage stats dashboard
- ✅ Activity logging (backend)
- ✅ System settings (UI + API)

### Phase 2 (IN PLANNING — Content Management)
- [ ] Activity Log viewer in admin UI
- [ ] Complete system settings persistence
- [ ] Era and Category management (CRUD in admin)
- [ ] Database population with Philippine history content
- [ ] Admin response to feedback

### Phase 3 (FUTURE — Mobile Game)
- [ ] Mobile game frontend (React Native / Flutter)
- [ ] Game mechanics and mission system
- [ ] Real-time score syncing
- [ ] Gamification (badges, era progression)
- [ ] Student self-join via class code in mobile app

---

## ⚠️ Known Limitations & Blockers

1. **System Settings Persistence**
   - UI and API calls are functional
   - Full persistence depends on backend controller completeness

2. **Activity Log Viewer**
   - Backend captures all actions via `/admin/activity-logs`
   - No UI in admin panel to browse logs yet

3. **Student Web Enrollment**
   - Students cannot join classes through the web dashboard
   - Designed for mobile app enrollment flow
   - Database foundation is ready

4. **Era/Category Content Management**
   - No UI or backend CRUD for eras or categories yet
   - Blocked on Phase 2 design integration with mobile game

5. **Leaderboard.js (Legacy)**
   - `Leaderboard.js` remains in the codebase but is not used in routing
   - `ClassResults.js` now handles both gradebook and leaderboard in a merged view

---

## � Project Setup Guide

### System Requirements

**Minimum Requirements**:
- Node.js: v14.0.0 or higher
- npm: v6.0.0 or higher (or yarn v1.22.0+)
- MongoDB: v4.4.0 or higher
- RAM: 2GB minimum
- Disk Space: 1GB minimum
- OS: Windows 10+, macOS 10.15+, Linux (Ubuntu 18.04+)

**Recommended**:
- Node.js: v18 LTS or higher
- npm: v9.0.0 or higher
- RAM: 4GB+
- SSD storage

---

### Step 1: Clone or Download Repository

```bash
# If you have the files, navigate to the project root
cd CHRONO-API
```

Check the directory structure:
```bash
ls -la
# Should show: chrono-dashboard/ chronoquest-api/ SYSTEM_DOCUMENTATION.md
```

---

### Step 2: MongoDB Setup

#### Option A: Local MongoDB Installation

**Windows**:
1. Download from https://www.mongodb.com/try/download/community
2. Run installer, follow default options
3. Start MongoDB service:
   ```bash
   net start MongoDB
   ```

**macOS**:
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux (Ubuntu)**:
```bash
sudo apt-get install -y mongodb
sudo systemctl start mongodb
```

#### Option B: MongoDB Atlas (Cloud)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster (0.5GB free tier available)
4. Get your connection URI: `mongodb+srv://username:password@cluster.mongodb.net/chronoquest`
5. Whitelist your IP address in Atlas console

#### Verify MongoDB Connection

```bash
mongo
> show dbs
# Should list admin, config, local databases
> exit
```

---

### Step 3: Backend Setup

#### 3.1 Install Dependencies

```bash
cd chronoquest-api
npm install
```

**Expected Output**:
```
added XXX packages in X.XXs
```

**Key dependencies installed**:
- express, express.js framework
- mongoose, MongoDB ODM
- jsonwebtoken, authentication
- bcryptjs, password hashing
- cors, cross-origin support
- dotenv, environment variables
- nodemon, dev auto-reload

#### 3.2 Create .env File

```bash
# In chronoquest-api/ directory
touch .env
```

**File contents (.env)**:
```env
# MongoDB Connection
MONGO_URI=mongodb://127.0.0.1:27017/chronoquest

# Server Port
PORT=3000

# JWT Secret (generate a strong random string)
JWT_SECRET=your_super_secret_key_here_at_least_32_characters_long

# Environment
NODE_ENV=development

# Optional: For production
# NODE_ENV=production
```

**For MongoDB Atlas**, change MONGO_URI:
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/chronoquest?retryWrites=true&w=majority
```

#### 3.3 Seed Sample Data (Optional but Recommended)

```bash
# Inside chronoquest-api/ directory

# Option 1: Using Node script (if seedDatabase.js exists)
node seedDatabase.js

# Option 2: Using mongoimport command
cd src/seeds
mongoimport --db chronoquest --collection teachers --file sampleData.json --jsonArray
mongoimport --db chronoquest --collection students --file sampleData.json --jsonArray
mongoimport --db chronoquest --collection questions --file sampleData.json --jsonArray
```

#### 3.4 Start Backend Server

```bash
# Development mode (with auto-reload)
npm run dev

# Or production mode
npm start
```

**Expected Output**:
```
🚀 Server: http://localhost:3000
✅ MongoDB Connected
```

**Troubleshooting**:
| Error | Solution |
|-------|----------|
| `EADDRINUSE: address already in use :::3000` | Port 3000 in use; kill process or change PORT in .env |
| `MongoError: connect ECONNREFUSED` | Ensure MongoDB running; check MONGO_URI |
| `TypeError: Cannot read property 'connect' of undefined` | Check mongoose import; verify dependencies installed |

---

### Step 4: Frontend Setup

#### 4.1 Install Dependencies

```bash
cd chrono-dashboard
npm install
```

#### 4.2 Verify API Configuration

**File**: `src/App.js` or individual page files

Check the API base URL:
```javascript
const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:3000/api/v1';
```

If you changed the backend port or host, update this URL.

#### 4.3 (Optional) Create .env.local

```bash
# In chrono-dashboard/ directory
echo "REACT_APP_API_BASE=http://localhost:3000/api/v1" > .env.local
```

#### 4.4 Start Frontend Server

```bash
npm start
```

**Expected Output**:
```
Compiled successfully!

You can now view chrono-dashboard in the browser.

  Local:            http://localhost:3001
```

A browser window should auto-open to `http://localhost:3001`.

**Troubleshooting**:
| Error | Solution |
|-------|----------|
| `EADDRINUSE: address already in use :::3001` | Change port: `PORT=3002 npm start` |
| `Module not found` | Run `npm install` again; check `node_modules` |
| `Failed to compile` | Check console for syntax errors; review `src/` files |
| API calls fail (404/CORS) | Ensure backend running; verify API_BASE URL |

---

### Step 5: Test the System

#### 5.1 Register an Instructor

1. Open `http://localhost:3001`
2. Click "Create Account"
3. Fill in details:
   - Full Name: `Test Teacher`
   - Email: `teacher@test.com`
   - Password: `password123`
4. Click "Create Account"
5. You'll be redirected to login

#### 5.2 Login

1. Enter credentials:
   - Email: `teacher@test.com`
   - Password: `password123`
2. Click "Sign In"

**Expected**: Dashboard loads with "No sections yet" message

#### 5.3 Create a Section

1. Click "Create a Learning Group"
2. Enter section name: `Grade 4 History`
3. Confirm
4. Section appears with auto-generated class code

#### 5.4 Test Admin Panel (if seeded with admin user)

1. If you're logged in as admin user (from sampleData.json):
   - Email: `maria.garcia@deped.gov.ph`
   - Password: `TeacherPass123!`
2. Click "Admin Portal" button in sidebar (visible only for admins)
3. View Dashboard tab with analytics
4. Browse Users, Questions, Feedback tabs

---

### Step 6: Verify All Components

**Backend Health Checks**:
```bash
# Test endpoint
curl http://localhost:3000/api/v1/test

# Expected: {"message":"API is working on Port 3000!"}

# Debug endpoint
curl http://localhost:3000/api/v1/debug

# Expected: {"message":"Server is alive!","dbStatus":1}
```

**Confirm All Ports**:
```bash
# Windows
netstat -ano | findstr :3000
netstat -ano | findstr :3001

# macOS/Linux
lsof -i :3000
lsof -i :3001
```

---

### Stopping the Application

#### Stop Frontend
```bash
# In terminal running npm start
Press Ctrl+C
```

#### Stop Backend
```bash
# In terminal running npm run dev / npm start
Press Ctrl+C
```

#### Stop MongoDB (if running locally)
```bash
# Windows
net stop MongoDB

# macOS
brew services stop mongodb-community

# Linux
sudo systemctl stop mongodb
```

---

### Environment Variables Reference

**Backend (.env in chronoquest-api/)**:

| Variable | Default | Required | Purpose |
|----------|---------|----------|---------|
| `MONGO_URI` | `mongodb://127.0.0.1:27017/chronoquest` | Yes | MongoDB connection string |
| `PORT` | 3000 | No | Backend server port |
| `JWT_SECRET` | (none) | Yes | Secret key for JWT signing (min 32 chars) |
| `NODE_ENV` | development | No | Environment (development/production) |

**Frontend**:

| Variable | Default | Required | Purpose |
|----------|---------|----------|---------|
| `REACT_APP_API_BASE` | `http://localhost:3000/api/v1` | No | Backend API URL |
| `PORT` | 3001 | No | Frontend port |

---

### Common Setup Issues & Solutions

**Issue**: `npm: command not found`
- **Solution**: Install Node.js from https://nodejs.org/

**Issue**: `MongoDB not found` or service won't start
- **Solution**: Reinstall MongoDB; ensure data directory has write permissions

**Issue**: CORS errors when frontend calls backend
- **Solution**: Verify `REACT_APP_API_BASE` matches backend address; check CORS config in `server.js`

**Issue**: Can't connect to MongoDB Atlas
- **Solution**: Whitelist your IP in Atlas console (or allow 0.0.0.0); verify password in URI is URL-encoded

**Issue**: Port already in use
- **Solution**: Kill process using port:
  ```bash
  # Windows
  taskkill /PID <PID> /F
  
  # macOS/Linux
  kill -9 <PID>
  ```

---

## �🚀 Getting Started

### Prerequisites
- Node.js v14+
- MongoDB (local or Atlas URI)
- npm or yarn

### Installation

#### Backend Setup
```bash
cd chronoquest-api
npm install
```

#### Frontend Setup
```bash
cd chrono-dashboard
npm install
```

### Configuration

#### Backend (.env file)
```env
MONGO_URI=mongodb://127.0.0.1:27017/chronoquest
PORT=3000
JWT_SECRET=your_secret_key_here_min_32_chars
NODE_ENV=development
```

#### Frontend
- Default API base: `http://localhost:3000/api/v1`
- Default frontend port: `3001`
- Styles: custom CSS in `src/index.css` (no Tailwind, no PostCSS transforms needed for styles)

### Running the Application

#### Start Backend
```bash
cd chronoquest-api
npm run dev        # Development with nodemon
# or
npm start          # Production mode
```
Expected: `🚀 Server: http://localhost:3000`

#### Start Frontend
```bash
cd chrono-dashboard
npm start
```
Expected: Browser opens at `http://localhost:3001`

### Testing the Flow
1. Go to `http://localhost:3001`
2. Register as instructor with name/email/password
3. Login with credentials
4. Create a new section (auto-generates class code)
5. Share class code with learners
6. View Class Results (gradebook + leaderboard) as learners submit scores
7. Access Admin Portal if your account has `role: admin`

---

## 📊 Data Flow

### User Registration Flow
```
Frontend (Register Form)
    ↓
POST /api/v1/auth/register
    ↓
Hash password (bcryptjs)
    ↓
Save to MongoDB
    ↓
Return success message
```

### Login Flow
```
Frontend (Login Form)
    ↓
POST /api/v1/auth/login
    ↓
Find user in DB → Compare passwords
    ↓
Generate JWT token
    ↓
Return token + teacher data
    ↓
Frontend stores in localStorage
```

### Class Results Flow
```
ClassResults mounts
    ↓
Section selected (classCode)
    ↓
Gradebook: GET /analytics/overall → filter by classCode
Leaderboard: GET /leaderboard/:classCode + /stats
    ↓
Render sorted table or ranked list
    ↓
CSV export (gradebook only)
```

---

## 🐛 Error Handling

### Common Error Responses

| Status | Message | Cause |
|--------|---------|-------|
| 400 | Section name is required | Missing section name |
| 401 | Unauthorized | Missing or invalid JWT token |
| 403 | Admin access required | Non-admin accessing admin route |
| 404 | Not found | Endpoint doesn't exist |
| 500 | Server error | Database or server issue |

### Server Logging
- All requests logged with method, URL, and timestamp
- Database connection status logged on startup

---

## 📝 Notes

- **Persistence**: Teacher data persisted in localStorage for session continuation
- **Cache Busting**: Timestamp added to profile requests to prevent stale data
- **Error Recovery**: Automatic cleanup of corrupted localStorage data on load
- **Scalability**: MongoDB Atlas can be used for cloud deployment
- **CSS**: Frontend uses a custom plain CSS file (`index.css`) with semantic class names. Tailwind CSS and PostCSS are no longer used for styles.

---

## 📧 Support & Contact

For issues or questions:
1. Check MongoDB connection status
2. Verify JWT token in localStorage
3. Review server console logs
4. Check CORS configuration
5. Ensure both servers are running on correct ports

---

**Last Updated**: April 2026
**System Status**: Active Development
**Version**: 1.1.0
````
